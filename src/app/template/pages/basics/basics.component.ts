import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface BasicForm {
  product_name: string;
  product_price: number;
  product_stock: number;
}

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  @ViewChild('basicsform') form!: NgForm;

  init_form: BasicForm = {
    product_name: '',
    product_price: 0,
    product_stock: 0
  }

  validate_name(): boolean {
    return this.form?.controls.product_name?.invalid &&
    this.form?.controls.product_name.touched;
  }

  validate_price(): boolean {
    return this.form?.controls.product_price?.value < 0 &&
    this.form?.controls.product_price.touched;
  }

  validate_stock(): boolean {
    return this.form?.controls.product_stock?.value < 0 &&
    this.form?.controls.product_stock.touched;
  }

  save(): void {
    console.log(this.form);
    // Reset form
    this.form.resetForm(this.init_form);
  }

}
