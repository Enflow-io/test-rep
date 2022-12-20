import React from 'react';
import classes from './TextInput.module.scss';

export interface TextInputProps {
  placeholder?: string
  type?: string
}

const TextInput = (props: TextInputProps) => {
  return <div className={classes.TextInput}>
    <input placeholder={props.placeholder} type={props.type || 'text'} />
  </div>;
};
export default TextInput;
