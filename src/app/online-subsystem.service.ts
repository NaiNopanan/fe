import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineSubsystemService {

  socket: any;
  host: string = 'localhost'


  constructor() { }

  connect() {
    this.socket = webSocket(`ws://${this.host}:4009`);
    this.subscribe()
  }

  subscribe() {
    this.socket.subscribe({
      next: (packet: any) => {
        console.log(packet)
        switch (packet.event) {
          case 'connected':
            console.log('connected')
            break;
          case 'animation':
            this.triggerPlayAnimation.next(packet.animation)
            console.log('animation')
            break;
        }
      },
      error: (e: any) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  private triggerPlayAnimation = new Subject<any>();
  playAnimationObservable: Observable<any> = this.triggerPlayAnimation.asObservable();


}
