export type CustomValidator = {
  type: ValidateType,
  regex: RegExp,
  description: string
};


export enum ValidateType {
  Uppercase,
  Lowercase,
  Digit,
  SpecialCharacter,
  MinLength
}

export const UppercaseRegex: RegExp = /^(?=.*[A-Z])/;
export const LowercaseRegex: RegExp = /(?=.*[a-z])/;
export const DigitRegex: RegExp = /(.*[0-9].*)/;
export const SpecialCharacterRegex: RegExp = /(?=.*[!@#$%^&*])/;
export const MinLengthRegex: RegExp = /.{8,}/;
export const StrongPasswordRegex: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

export const AVAILABLE_VALIDATORS: CustomValidator[] = [
  { type: ValidateType.Uppercase, regex: UppercaseRegex, description: 'At least one uppercase letter.' },
  { type: ValidateType.Lowercase, regex: LowercaseRegex, description: 'At least one lowercase letter.' },
  { type: ValidateType.Digit, regex: DigitRegex, description: 'At least one digit.' },
  { type: ValidateType.SpecialCharacter, regex: SpecialCharacterRegex, description: 'At least one special character.' },
  { type: ValidateType.MinLength, regex: MinLengthRegex, description: 'Min. 8 characters.' }
];