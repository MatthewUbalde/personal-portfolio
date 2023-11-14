import {useState} from 'react'

import React from 'react'

export const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  // onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [event.target.name]:
      event.target.value});
  };

  // onSubmit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(); // trigger the callback
  }

  return {
    onChange,
    onSubmit,
    values,
  };
}