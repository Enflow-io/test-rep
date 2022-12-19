import React from 'react';
import HearBtnIcon from '../../../Svg/HearBtnIcon';
import DromIconBlack from '../../../Svg/Logos/DromIconBlack';
import classes from './CatalogCard.module.scss';

export interface CatalogCardProps {
  showDivider?: boolean
  setIsHovered?: (isHovered: boolean) => void
}

const CatalogCard = (props: CatalogCardProps) => {
  return <div className={classes.CatalogCard}
    onMouseEnter={() => {
      if (props.setIsHovered) {
        props.setIsHovered(true);
      }
    }}
    onMouseLeave={() => {
      if (props.setIsHovered) {
        props.setIsHovered(false);
      }
    }}

  >
    <div className={classes.CatalogCardContainer}>
      <div className={classes.ImgContainer}>
        <img src={'/img/car.png'} />
      </div>
      <div className={classes.Info}>
        <a href=''>Toyota Camry VII (XV50)</a>

        <div className={classes.Tags}>
          <div>2020 г</div>
          <div>48 000 км</div>
        </div>

        <div className={classes.Props}>
          2.5 л / 249 л.с. / Бензин
        </div>

        <div className={classes.MoreProps}>
          <div className={classes.MorePropLabels}>
            <label>Автомат</label>
            <label>Передний привод</label>
          </div>

          <div className={classes.MorePropVals}>
            <div className={classes.MorePropsVal}>Седан</div>
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
        <DromIconBlack />
        15 мин. назад
      </div>

      <div className={classes.Price}>
        <span>3 600 000 ₽</span>
      </div>


      <div className={classes.Buttons}>
        <a href=""><HearBtnIcon /></a>
      </div>


    </div>

    <div className={`${classes.Divider} ${props.showDivider ? null : classes.HideDivider}`}></div>
  </div>;
};
export default CatalogCard;
