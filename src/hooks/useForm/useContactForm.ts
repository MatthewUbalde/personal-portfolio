import {useState} from 'react'
import React from 'react'

export const useForm = (callback: CallableFunction, recaptchaResponse: string, initialState: ContactFormData) => {
  const [values, setValues] = useState(initialState);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, 'g-recaptcha-response': recaptchaResponse, [event.target.name]:
      event.target.value});
  };

  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({...values, 'g-recaptcha-response': recaptchaResponse, [event.target.name]:
      event.target.value});
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(); // trigger the callback
  }

  const clearValues = () => {
    setValues({
      'from-name': "",
      'email': "",
      'message': "",
      'g-recaptcha-response': ""
    });
  }

  return {
    onInputChange,
    onTextareaChange,
    onSubmit,
    clearValues,
    values,
  };
}