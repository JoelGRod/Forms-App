import { FormControl } from "@angular/forms";

/* ------- Custom Validations Logic ------- */
export const name_pattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
export const email_pattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const cant_be_thing = (control: FormControl) => {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'thing') return { thing: true };
    else return null;
}
/* ---------------------------------------- */