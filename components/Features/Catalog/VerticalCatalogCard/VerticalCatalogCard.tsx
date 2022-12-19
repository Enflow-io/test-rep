import React from 'react';
import DromIcon from '../../../Svg/Logos/DromIcon';
import classes from './VerticalCatalogCard.module.scss';

export interface VerticalCatalogCardProps {

}

const VerticalCatalogCard = ({ }: VerticalCatalogCardProps) => {
  return <div className={classes.VerticalCatalogCard}>
    <div className={classes.Img}>
      <img src={''} />
    </div>

    <a href='#'>Toyota Camry VII (XV50)</a>

    <div className={classes.Tags}>
      <div>2020 г</div>
      <div>48 000 км</div>
    </div>

    <ul className={classes.Props}>
      <li>Автомат</li>
      <li>Передний привод</li>
      <li>Седан</li>
      <li>Белый</li>
    </ul>

    <div className={classes.Location}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#5B8149" />
      </svg>
      Домодедовская, Орехово, Москва
    </div>

    <div className={classes.Footer}>
      <DromIcon />
      <div className={classes.UpdatedTime}>22 мин. назад</div>
    </div>

  </div>;
};
export default VerticalCatalogCard;
