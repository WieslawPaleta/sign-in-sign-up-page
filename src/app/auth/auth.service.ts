import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(
    private router: Router,
  ) {}

  signIn(): void {
    this.isLoggedIn = true;
    this.router.navigate(['']);
  }

  signUp(): void {
    this.isLoggedIn = true;
    this.router.navigate(['']);
  }

}
