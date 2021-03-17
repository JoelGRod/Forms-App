import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  public person = {
    gender: '',
    notifications: true
  }

  public terms: boolean = false;

  save(): void {
    console.log("Form saved");
  }

}
