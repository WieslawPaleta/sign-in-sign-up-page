import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SingUpComponent,
  },
  {
    path: 'sign-in',
    component: SingInComponent,
  },
  {
    path: '**',
    redirectTo: 'sign-up'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
