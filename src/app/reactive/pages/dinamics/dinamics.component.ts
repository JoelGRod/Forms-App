import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  public dinamics_form: FormGroup = this.fb.group({
    name: [ , [Validators.required, Validators.minLength(3)]],  //Form control
    favourites: this.fb.array([                                 // Form Controls Array
      ['Baba'],                                                 // Form control
      ['Oxygen not included'],
      ['Cyberpunk2077']
    ], Validators.required)
  });

  public new_favourite: FormControl = this.fb.control('', Validators.required);

  get fav_array() {
    return this.dinamics_form.get('favourites') as FormArray;
    // return this.dinamics_form.controls.favourites as FormArray;
  }

  constructor(private fb: FormBuilder) { }
  
  // Create service for this kind of repetitive logic
  public field_not_valid(field: string) {
    return this.dinamics_form.controls[field].errors 
    && this.dinamics_form.controls[field].touched;
  }

  add_favourite(): void {
    if(this.new_favourite.invalid) return;

    this.fav_array.push(this.fb.control(this.new_favourite.value, Validators.required));

    this.new_favourite.reset();
  }

  delete_favourite(index: number): void {
    this.fav_array.removeAt(index);
  }

  save(): void {

    if(this.dinamics_form.invalid) {
      this.dinamics_form.markAllAsTouched();
      return;
    }

    console.log(this.dinamics_form.value);

  }
}
