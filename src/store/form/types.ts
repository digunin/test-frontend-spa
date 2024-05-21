import { PayloadAction } from "@reduxjs/toolkit";
import { FormName, TypeOfFieldName } from "./setup-forms.types";

export type InputField = {
  value: string;
  error: string | null;
  unTouched: boolean;
};

export const defaulInputField: InputField = {
  error: null,
  value: "",
  unTouched: true,
};

export type FormState<N extends FormName> = {
  [key in TypeOfFieldName<N>]: InputField;
};

export type ReducerName<N> = N extends FormName
  ? `set${Capitalize<N>}InputField`
  : never;

export interface WithInputField<N> {
  inputField: InputField;
  name: N;
}

export type FormReducer<N extends FormName> = (
  state: FormState<N>,
  action: PayloadAction<WithInputField<TypeOfFieldName<N>>>
) => void;
