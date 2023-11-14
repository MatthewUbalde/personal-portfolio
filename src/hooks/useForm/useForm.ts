import {useState} from 'react'

import React from 'react'

export const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [event.target.name]:
      event.target.value});
  };

  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({...values, [event.target.name]:
      event.target.value});
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(); // trigger the callback
  }

  return {
    onInputChange,
    onTextareaChange,
    onSubmit,
    values,
  };
}