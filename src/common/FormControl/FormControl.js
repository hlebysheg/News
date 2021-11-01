import React from 'react';
import s from './FormControl.module.css';

export const Textarea = ({input, meta, ...props}) => {
  const error = meta.touched && meta.error;
  return (
    <div className = {""}>
      <textarea {...input} {...props} className={s.textarea+' '+ "form-control"+ " " +(error ? "is-invalid" : "")}/>

    {error && <span>{meta.error}</span>}
    {!error && <span>Заполните все поля</span>}
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  const error = meta.touched && meta.error;
  return (
    <div className = {""}>
      <input {...input} {...props} className={s.textarea+' '+ "form-control"+ " " +(error ? "is-invalid" : "")}/>

        {error ?<span>{meta.error}</span>:<br/>}
    </div>
  )
}
