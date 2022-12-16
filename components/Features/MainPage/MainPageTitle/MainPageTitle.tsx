import React from 'react';
import AutoRuIcon from '../../../Svg/Logos/AutoRuIcon';
import AvitoIcon from '../../../Svg/Logos/AvitoIcon';
import DromIcon from '../../../Svg/Logos/DromIcon';
import classes from './MainPageTitle.module.scss';

export interface MainPageTitleProps {

}

const MainPageTitle = ({ }: MainPageTitleProps) => {
  return <div className={classes.MainPageTitle}>
    <h1>Aгрегатор по поиску автомобилей</h1>
    <label>со всей России</label>

    <ul className={classes.Logos}>
      <li><DromIcon /></li>
      <li><AutoRuIcon /></li>
      <li><AvitoIcon /></li>
    </ul>
  </div>;
};
export default MainPageTitle;
