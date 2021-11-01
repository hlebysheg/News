import React from 'react';
import s from './FormControl.module.css';

export const Textarea = ({input, meta, ...props}) => {
  const error = meta.touched && meta.error;
  return (
    <div className = {s.formControl + " " + (error ? s.error : "")}>
      <textarea {...input} {...props} className={s.textarea}/>
      <br/>
    {error && <span>{meta.error}</span>}
    {!error && <span>Заполните все поля</span>}
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  const error = meta.touched && meta.error;
  return (
    <div className = {s.formControl + " " + (error ? s.error : "")}>
      <input {...input} {...props}/>
      <br/>
        {error && <span>{meta.error}</span>}
    </div>
  )
}
