import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email: string = control.value;

    return this.http.get(`http://localhost:3000/usuarios?q=${email}`)
    .pipe(
      delay(3000),
      map( (resp: any) => {
        return (resp.length === 0)? null : { duplicated_email: true }
      })
    );
  }
}
