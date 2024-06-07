import { PayloadAction, PrepareAction } from "@reduxjs/toolkit";
import { FormReducer, FormState, ReducerName, WithInputField } from "./types";
import { FormName, TypeOfFieldName } from "./setup-forms.types";

export const createSliceOptions = <N extends FormName>(
  name: N,
  reducer: {
    [key in ReducerName<N>]: {
      reducer: FormReducer<N>;
      prepare: PrepareAction<WithInputField<TypeOfFieldName<N>>>;
    };
  },
  initialState: FormState<N>
) => {
  return {
    name: `form/${name}`,
    initialState,
    reducers: {
      setInitialValues: (
        state: FormState<N>,
        action: PayloadAction<FormState<N>>
      ) => {
        return action.payload;
      },
      setTouchedAll: (state: FormState<N>) => {
        for (let name of Object.keys(state)) {
          state[name as TypeOfFieldName<N>].unTouched = false;
        }
      },
      resetForm: (state: FormState<N>) => {
        return initialState;
      },
      ...reducer,
    },
  };
};

export const isFormValid = <T extends FormState<any>>(
  formState: T
): boolean => {
  for (const inputField of Object.values(formState)) {
    if (inputField.error) return false;
  }
  return true;
};

export const formReducerWithPreparedPayload = {
  reducer: <N extends FormName>(
    state: FormState<N>,
    action: PayloadAction<WithInputField<TypeOfFieldName<N>>>
  ) => {
    state[action.payload.name] = {
      ...action.payload.inputPayload,
      unTouched: false,
    };
  },
  prepare: (name: any, value: string, error: string) => {
    return { payload: { name, inputPayload: { value, error } } };
  },
};