import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
// Components
import { DinamicsComponent } from './pages/dinamics/dinamics.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SwitchesComponent } from './pages/switches/switches.component';


@NgModule({
  declarations: [
    DinamicsComponent,
    BasicsComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
