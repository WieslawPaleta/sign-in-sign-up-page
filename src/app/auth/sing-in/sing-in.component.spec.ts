import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SingInComponent } from './sing-in.component';

describe('SingInComponent', () => {
  let component: SingInComponent;
  let fixture: ComponentFixture<SingInComponent>;
  let form: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingInComponent ],
      imports: [ReactiveFormsModule,  RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInComponent);
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

  it('should test Password ctrl validity', () => {

    const passwordInput = form.controls.password;

    expect(passwordInput.valid).toBeFalsy();

    expect(Object.keys(passwordInput.errors as ValidationErrors).length).toBe(1);

    expect((passwordInput.errors as ValidationErrors)['required']).toBeTruthy();

    passwordInput.setValue('dsklghdl');

    expect(passwordInput.errors).toBeNull();

  });
});
