import React from 'react';
import classes from './FilterButton.module.scss';

export interface FilterButtonProps {
  icon?: React.ReactNode
  title: string
  type: "primary" | "cancel" | "primary-light"
}

const FilterButton = (props: FilterButtonProps) => {

  const map = {
    "primary": classes.Primary,
    "cancel": classes.Cancel,
    "primary-light": classes.PrimaryLight,
  }
  const iconOnly = !props.title && !!props.icon;
  return <a className={`${classes.FilterButton} ${iconOnly ? classes.IconButton : null} ${map[props.type]}`}>
    {props.icon && props.icon}
    {props.title && <span>{props.title}</span>}
  </a>;
};
export default FilterButton;
