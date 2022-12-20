import React from 'react';
import classes from './FilterDoubleInput.module.scss';

export interface FilterDoubleInputProps {
  firstInput: React.ReactNode
  secondInput: React.ReactNode
  firstLabel: string
  secondLabel: string
}

const FilterDoubleInput = ({ firstInput, secondInput, firstLabel, secondLabel, ...props }: FilterDoubleInputProps) => {
  return <div className={classes.FilterDoubleInput}>
    <div className={classes.Row}>
      <div className={classes.Col}>
        <label>{firstLabel}</label>
      </div>
      {secondLabel && <div className={classes.Col}>
        <label>{secondLabel}</label>
      </div>}
    </div>
    <div className={classes.Row}>
      <div className={classes.Col}>
        {firstInput}
      </div>
      <div className={classes.Col}>
        {secondInput}
      </div>
    </div>

  </div>;
};
export default FilterDoubleInput;
