import React from 'react';
import LocationIcon from '../../../Svg/LocationIcon';
import classes from './LocationButton.module.scss';

export interface LocationButtonProps {

}

const LocationButton = ({}: LocationButtonProps) => {
  return <div className={classes.LocationButton}>
    <LocationIcon /><label>Москва</label>
  </div>;
};
export default LocationButton;
