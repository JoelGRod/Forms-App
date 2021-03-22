import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public name_pattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  public email_pattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  // Form control validator
  public cant_be_thing(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();
    if(value === 'thing') return {thing: true};
    else return null;
  }

  // Global form validator (Compare 2 form controls)
  public not_equals(password1: string, password2: string) {
    return (form_group: AbstractControl): ValidationErrors | null => {
      const p_1: string = form_group.get(password1)?.value;
      const p_2: string = form_group.get(password2)?.value;

      if( p_1 !== p_2 ) {
        form_group.get(password2)?.setErrors({not_equals: true}); // Set form control error
        return {not_equals: true};                                // Set form global error
      } else {
        form_group.get(password2)?.setErrors(null);
        return null;
      }
    }
  }

}
