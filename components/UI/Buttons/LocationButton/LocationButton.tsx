import React from 'react';
import LocationIcon from '../../../Svg/LocationIcon';
import classes from './LocationButton.module.scss';

export interface LocationButtonProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const LocationButton = ({ onClick }: LocationButtonProps) => {
  return <div onClick={(e) => {
    onClick(e);
  }} className={classes.LocationButton}>
    <LocationIcon /><label>Москва</label>
  </div>;
};
export default LocationButton;
