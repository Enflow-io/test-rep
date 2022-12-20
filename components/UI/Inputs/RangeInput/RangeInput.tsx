import React from 'react';
import classes from './RangeInput.module.scss';

export interface RangeInputProps {

}

const RangeInput = ({ }: RangeInputProps) => {
  return <div className={classes.RangeInput}>
    <input className={classes.From} placeholder='Год от' type={'text'} />
    <div className={classes.Divider}>&nbsp;</div>
    <input className={classes.To} placeholder='Год до' type={'text'} />
  </div>;
};
export default RangeInput;
