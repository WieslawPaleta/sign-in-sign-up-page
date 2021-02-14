import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SingUpComponent } from './sing-up.component';

describe('SingUpComponent', () => {
  let component: SingUpComponent;
  let form: FormGroup;
  let fixture: ComponentFixture<SingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingUpComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpComponent);
    component = fixture.componentInstance;
    form = component.form;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should test Email ctrl validity', () => {

    const emailInput = form.controls.email;

    expect(emailInput.valid).toBeFalsy();

    expect(Object.keys(emailInput.errors as ValidationErrors).length).toBe(1);

    expect((emailInput.errors as ValidationErrors)['required'] ).toBeTruthy();

    emailInput.setValue('dsklghdl');

    expect(Object.keys(emailInput.errors as ValidationErrors).length).toBe(1);

    expect((emailInput.errors as ValidationErrors)['email']).toBeTruthy();

    emailInput.setValue('dsklghdl@djhfj');

    expect(emailInput.errors).toBeNull();
  });

  it('should test Full Name ctrl validity', () => {

    const name = form.controls.name;

    expect(name.valid).toBeFalsy();

    expect(Object.keys(name.errors as ValidationErrors).length).toBe(1);

    expect((name.errors as ValidationErrors)['required']).toBeTruthy();

    name.setValue('Pat');

    expect(name.valid).toBeFalsy();

    expect(Object.keys(name.errors as ValidationErrors).length).toBe(1);

    expect((name.errors as ValidationErrors)['missingLastName']).toBeTruthy();

    name.setValue('Pat ikot');

    expect(name.errors).toBeNull();
  });

  it('should test Password ctrl validity', () => {

    const passwordInput = form.controls.password;

    expect(passwordInput.valid).toBeFalsy();

    expect(Object.keys(passwordInput.errors as ValidationErrors).length).toBe(1);

    expect((passwordInput.errors as ValidationErrors)['required']).toBeTruthy();

    passwordInput.setValue('dskl');

    expect(passwordInput.valid).toBeFalsy();

    expect(Object.keys(passwordInput.errors as ValidationErrors).length).toBe(1);

    expect((passwordInput.errors as ValidationErrors)['minlength']).toBeTruthy();

    passwordInput.setValue('12345678');

    expect(passwordInput.errors).toBeNull();
  });

  it('should test PasswordConfirmation ctrl validity', () => {

    const passwordConfirmationInput = form.controls.passwordConfirmation;

    expect(passwordConfirmationInput.valid).toBeFalsy();

    expect(Object.keys(passwordConfirmationInput.errors as ValidationErrors).length).toBe(1);

    expect((passwordConfirmationInput.errors as ValidationErrors)['required']).toBeTruthy();

    passwordConfirmationInput.setValue('hjhj');

    expect(passwordConfirmationInput.valid).toBeFalsy();

    expect(Object.keys(passwordConfirmationInput.errors as ValidationErrors).length).toBe(1);

    expect((passwordConfirmationInput.errors as ValidationErrors)['minlength']).toBeTruthy();

    passwordConfirmationInput.setValue('896798t98g');

    expect(passwordConfirmationInput.errors).toBeNull();
  });

  it('should test if Password and PasswordConfirmation are the same', () => {

    let passString = 'wat';
    let passString2 = 'wat10932';

    const passwordInput = form.controls.password;
    const passwordConfirmationInput = form.controls.passwordConfirmation;

    passwordInput.setValue(passString);
    passwordConfirmationInput.setValue(passString2);

    expect((form.errors as ValidationErrors)['notTheSamePasswords']).toBeTruthy();

    passwordInput.setValue(passString2);
    passwordConfirmationInput.setValue(passString2);

    expect((form.errors as ValidationErrors)).toBeNull();
  });
});
