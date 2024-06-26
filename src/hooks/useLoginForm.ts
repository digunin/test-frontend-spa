import { FormEvent } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useAppSelector } from "../store";
import {
  resetForm,
  selectIsFormValid,
  setLoginInputField,
  setTouchedAll,
} from "../store/form/loginFormSlice";
import { useLoginMutation } from "../api/authAPI";
import { useForm } from "./useForm";

export const useLoginForm = () => {
  const inputFields = useAppSelector((state) => state.loginFormState);
  const isFormValid = useAppSelector(selectIsFormValid);
  const { handleChange, formPayload, dispatch } = useForm(
    inputFields,
    setLoginInputField
  );
  const [signIn, { isLoading }] = useLoginMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    dispatch(setTouchedAll());
    if (!isFormValid) return;
    signIn(formPayload)
      .unwrap()
      .then(() => {
        dispatch(resetForm());
      })
      .catch((err) => {});
  };

  return { handleSubmit, handleChange, inputFields, loading: isLoading };
};
