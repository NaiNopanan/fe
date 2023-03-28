import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineComponent } from './engine/engine.component';
import { IframeComponent } from './iframe/iframe.component';

const routes: Routes = [
  {
    path: 'engine',
    component: EngineComponent
  },
  {
    path: 'iframe',
    component: IframeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
