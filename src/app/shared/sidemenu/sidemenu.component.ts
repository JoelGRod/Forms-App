import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    .my-link {
      cursor: pointer;
    }
    `
  ]
})
export class SidemenuComponent {

  public template_items: MenuItem[] = [
    { 
      text: 'Basics',
      route: './template/basics'
    },
    { 
      text: 'Dinamics',
      route: './template/dinamics'
    },
    { 
      text: 'Switches',
      route: './template/switches'
    },
  ];

  public reactive_items: MenuItem[] = [
    { 
      text: 'Basics',
      route: './reactive/basics'
    },
    { 
      text: 'Dinamics',
      route: './reactive/dinamics'
    },
    { 
      text: 'Switches',
      route: './reactive/switches'
    },
  ];

  public auth_items: MenuItem[] = [
    {
      text: 'Login',
      route: './auth/login'
    },
    {
      text: 'Register',
      route: './auth/register'
    }
  ]

}
