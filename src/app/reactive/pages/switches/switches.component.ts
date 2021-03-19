import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  public switches_form: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [ false, Validators.required],
    terms: [false, Validators.requiredTrue]
  });

  // Comes from DB
  public person = {
    gender: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    // BBDD request etc etc -> person + extra field
    this.switches_form.reset({
      ...this.person,
      terms: false
    });

    // Update person in real time
    this.switches_form.valueChanges.subscribe( ({ terms, ...rest }) => {
      this.person = rest;
    });
  }

  save(): void {

    if(this.switches_form.invalid) return;

    // Update person in form save
    const form_values = {...this.switches_form.value};
    delete form_values.terms;
    this.person = form_values;

    console.log(form_values);
  }

}
