import React from 'react';
import DromIcon from '../../../Svg/Logos/DromIcon';
import classes from './CatalogCard.module.scss';

export interface CatalogCardProps {

}

const CatalogCard = ({ }: CatalogCardProps) => {
  return <div className={classes.CatalogCard}>
    <div className={classes.ImgContainer}>
      <img src={'/img/car.png'} />
    </div>
    <div className={classes.Info}>
      <a href=''>Toyota Camry VII (XV50)</a>

      <div className={classes.Tas}>
        <div>2020 г</div>
        <div>48 000 км</div>
      </div>

      <div className={classes.Props}>
        2.5 л / 249 л.с. / Бензин
      </div>

      <div className={classes.MoreProps}>
        <div className={classes.MoreProp}>
          <label>Автомат</label>
          <div className={classes.MorePropsVal}>Седан</div>
        </div>

        <div className={classes.MoreProp}>
          <label>Передний привод</label>
          <div className={classes.MorePropsVal}>Белый</div>
        </div>
      </div>

      <div className={classes.Location}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="#5B8149" />
        </svg>
        Домодедовская, Орехово, Москва
      </div>
    </div>

    <div className={classes.Source}>
      <DromIcon />
      15 мин. назад
    </div>

  </div>;
};
export default CatalogCard;
