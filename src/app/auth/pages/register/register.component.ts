import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Validators Logic (2 options)
import { cant_be_thing, email_pattern, name_pattern } from 'src/app/shared/validators/validators';
import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  private init_form_values = {
    name: 'Joel Glez',
    email: 'joel@gmail.com'
  };

  /* ------- Custom Validations Logic (Separated in service or plain ts) ------- */
  // private name_pattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  // private email_pattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // private cant_be_thing(control: FormControl) {
  //   const value: string = control.value?.trim().toLowerCase();
  //   if(value === 'thing') return {thing: true};
  //   else return null;
  // }
  /* ---------------------------------------- */

  public register_form: FormGroup = this.fb.group({
    name: ['', [
            Validators.required,
            Validators.pattern(this.validators_service.name_pattern)
          ]
        ],
    email: ['', [
            Validators.required,
            Validators.pattern(this.validators_service.email_pattern)
          ]
        ],
    username: ['', [
            Validators.required,
            this.validators_service.cant_be_thing
          ]
        ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_conf: ['', [Validators.required]],
  }, {
    validators: [ this.validators_service.not_equals('password', 'password_conf') ]
  });

  constructor(private fb: FormBuilder, 
              private validators_service: ValidatorService) { }

  ngOnInit(): void {
    this.register_form.reset({
      ...this.init_form_values,
      username: 'test',
      password: 'test',
      password_conf: 'test',
    });
  }

  field_not_valid(field: string) {
    return this.register_form.get(field)?.errors && 
            this.register_form.get(field)?.touched;
  }

  save(): void {
    if(this.register_form.invalid) {
      this.register_form.markAllAsTouched();
      return;
    }
  }

}
