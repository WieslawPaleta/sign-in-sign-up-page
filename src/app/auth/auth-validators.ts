import { AbstractControl, ValidationErrors } from "@angular/forms";

export const passwordValidator = (controlName: string, controlName2: string) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get(controlName);
    const password2 = control.get(controlName2);

    return password &&
      password2 &&
      password.value !== password2.value ? { notTheSamePasswords: true } : null;
  };
}

export const nameValidator = (control: AbstractControl): ValidationErrors | null => {
  if (
    control &&
    control.value &&
    control.value.trim().split(' ').length < 2
  ) {
    return { missingLastName: true };
  }
  return null;
}

