import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";


@Directive({
    selector: '[customMin] [ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {

    @Input() minimun!: number;

    validate(control: FormControl) {
        const value = control.value;
        return (control.value < this.minimun) ? {'CustomMin': true} : null;
    }



}