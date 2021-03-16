import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Routes
import { TemplateRoutingModule } from './template-routing.module';
// Components
import { SwitchesComponent } from './pages/switches/switches.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { DinamicsComponent } from './pages/dinamics/dinamics.component';
// Directives
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    SwitchesComponent,
    BasicsComponent,
    DinamicsComponent,
    // Directives
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
