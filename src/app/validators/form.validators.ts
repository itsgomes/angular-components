import { AbstractControl, ValidationErrors } from "@angular/forms";

export const forbiddenNameValidator = (notAllowedNames: string[]) => {
  return (control: AbstractControl) : ValidationErrors | null => {
    return notAllowedNames.includes(control.value) ?
    { forbiddenName: 'Name is not allowed.' } :
    null;
  }
}