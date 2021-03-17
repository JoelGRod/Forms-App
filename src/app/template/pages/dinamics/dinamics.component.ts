import { Component } from '@angular/core';

interface Person {
  name: string;
  favourites: Favourite[];
}

interface Favourite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  public person: Person = {
    name: 'Test',
    favourites: [
      {id: 1, name: 'Baba is you'},
      {id: 2, name: 'Oxygen Not Included'},
      {id: 3, name: 'Loop Hero'},
    ]
  }

  public new_favourite: string = '';

  add(): void {
    const new_favourite: Favourite = {
      id: this.person.favourites.length + 1,
      name: this.new_favourite
    };

    this.person.favourites.push({...new_favourite});
    this.new_favourite = '';
  }

  delete(index: number): void {
    this.person.favourites.splice(index, 1);
  }

  save(): void {
    console.log('Form saved');
  }
  
}
