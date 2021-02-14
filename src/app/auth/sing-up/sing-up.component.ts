import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { nameValidator, passwordValidator } from '../auth-validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: [
    '../auth.scss',
    './sing-up.component.scss'
  ]
})
export class SingUpComponent implements OnInit {

  form = this.fb.group({
    email2: [],
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, nameValidator]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordConfirmation: ['', [Validators.required, Validators.minLength(8)]],
  }, { validators: passwordValidator('password', 'passwordConfirmation') });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.signUp();
    } else {

    }
  }

  get emailCtrl(): AbstractControl | null {
    return this.form.get('email');
  }

  get nameCtrl(): AbstractControl | null {
    return this.form.get('name');
  }

  get passwordCtrl(): AbstractControl | null {
    return this.form.get('password');
  }

  get passwordConfirmationCtrl(): AbstractControl | null {
    return this.form.get('passwordConfirmation');
  }

  get showEmailError(): boolean {
    return this.showControlError(this.emailCtrl);
  }

  get showNameError(): boolean {
    return this.showControlError(this.nameCtrl);
  }

  get showPasswordError(): boolean {
    return this.showControlError(this.passwordCtrl);
  }

  get showPasswordConfirmationError(): boolean {
    return this.showControlError(this.passwordConfirmationCtrl);
  }

  get showNotTheSamePasswordsError(): boolean {
    return !!this.passwordConfirmationCtrl &&
      (
        this.passwordConfirmationCtrl.dirty ||
        this.passwordConfirmationCtrl.touched
      ) &&
      !!this.form.errors &&
      !!this.form.errors['notTheSamePasswords'];
  }

  private showControlError(ctrl: AbstractControl | null): boolean {
    return !!ctrl &&
      ctrl.invalid && (
        ctrl.dirty ||
        ctrl.touched
      );
  }

}
