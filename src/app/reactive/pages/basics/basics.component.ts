import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit{

  // 1º Option
  // public basics_form: FormGroup = new FormGroup({
  //   'name': new FormControl('test'),
  //   'price': new FormControl(0),
  //   'stock': new FormControl(0),
  // });
  
  // 2º Option: Better approach
  public basics_form: FormGroup = this.fb.group({
    name  : ['Name', [Validators.required, Validators.minLength(3)]],
    price : [0 , [Validators.required, Validators.min(0)]],
    stock : [0 , [Validators.required, Validators.min(0)]]
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  fieldNotValid(field: string) {
    return this.basics_form.controls[field].errors && this.basics_form.controls[field].touched;
  }

  save(): void {

    if(this.basics_form.invalid) {
      this.basics_form.markAllAsTouched();
      return;
    };

    console.log(this.basics_form.value);
    this.basics_form.reset({
      name: 'test',
      price: 0,
      stock: 0
    });
  }

}
