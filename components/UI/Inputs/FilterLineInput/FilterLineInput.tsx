import React from 'react';
import classes from './FilterLineInput.module.scss';

export interface FilterLineInputProps {
  label: string
  component: React.ReactNode
}

const FilterLineInput = (props: FilterLineInputProps) => {
  return <div className={classes.FilterLineInput}>
    <label>{props.label}</label>
    <div className={classes.ComponentContainer}>
      {props.component}
    </div>
  </div>;
};
export default FilterLineInput;
