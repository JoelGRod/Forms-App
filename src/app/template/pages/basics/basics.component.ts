import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  @ViewChild('basicsform') form!: NgForm;

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
  }

}
