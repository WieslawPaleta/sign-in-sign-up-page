import { Observable } from 'rxjs';

import { Injectable, NgModule } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, Routes, UrlTree
} from '@angular/router';

import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';

@Injectable()
class CanActivateHome implements CanActivate {
  constructor(private authSrvice: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if (!this.authSrvice.isLoggedIn) {
      return this.router.parseUrl('/auth/sign-in');
    }
    return true;
  }
}

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(value => value.AuthModule),
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [CanActivateHome]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CanActivateHome
  ],
})
export class AppRoutingModule { }
