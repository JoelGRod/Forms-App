import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public name_pattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  public email_pattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public cant_be_thing(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();
    if(value === 'thing') return {thing: true};
    else return null;
  }
}
