import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: [
    '../auth.scss',
    './sing-in.component.scss'
  ]
})
export class SingInComponent implements OnInit {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {}

  get emailCtrl(): AbstractControl | null {
    return this.form.get('email');
  }

  get showEmailError(): boolean {
    return !!this.emailCtrl &&
      this.emailCtrl.invalid && (
        this.emailCtrl.dirty ||
        this.emailCtrl.touched
      );
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.signIn();
    } else {

    }
  }

}
