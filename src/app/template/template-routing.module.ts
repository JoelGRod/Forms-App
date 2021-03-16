import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BasicsComponent } from './pages/basics/basics.component';
import { DinamicsComponent } from './pages/dinamics/dinamics.component';
import { SwitchesComponent } from './pages/switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basics',
        component: BasicsComponent
      },
      {
        path: 'dinamics',
        component: DinamicsComponent
      },
      {
        path: 'switches',
        component: SwitchesComponent
      },
      {
        path: '**',
        redirectTo: 'basics'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TemplateRoutingModule { }
