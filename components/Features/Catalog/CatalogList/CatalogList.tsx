import React, { useState } from 'react';
import HorizontalBtnIcon from '../../../Svg/HorizontalBtnIcon';
import VerticalBtnIcon from '../../../Svg/VerticalBtnIcon';
import SelectInput from '../../../UI/Inputs/SelectInput/SelectInput';
import CatalogCard from '../CatalogCard/CatalogCard';
import getData from '../CatalogMockData';
import VerticalCatalogCard from '../VerticalCatalogCard/VerticalCatalogCard';
import classes from './CatalogList.module.scss';

export interface CatalogListProps {

}

const CatalogList = ({ }: CatalogListProps) => {
  const cardsQnt = 10;
  const mockCards = Array.apply(null, Array(cardsQnt)).map(function () { });
  const [currentHoveredCard, setCurrentHoveredCard] = useState(-1);
  const [isVertical, setIsVertical] = useState(true);

  const data = getData(22);
  console.log(data)

  return <div className={classes.CatalogList}>
    <div className={classes.Header}>
      <h3>Последние предложения</h3>
      <div className={classes.HeaderMenu}>
        <SelectInput
          instanceId={'sort-react-select1231s'}
          className={classes.Select}
          value={{ value: 'Популярные', label: 'Популярные' }}
          options={[
            { value: 'Популярные', label: 'Популярные' },
            { value: 'Редкие', label: 'Редкие' },
            { value: 'Дешевые', label: 'Дешевые' },
            { value: 'Дорогие', label: 'Дорогие' }
          ]} />

        <SelectInput
          instanceId={'sort2-react-selectasdfsdf3'}
          value={{ value: 'За все время', label: 'За все время' }}
          options={[
            { value: 'За все время', label: 'За все время' },
            { value: 'За месяц', label: 'За месяц' },
          ]}

        />

        <div className={classes.Divider}></div>

        <a className={classes.HorizontalBtn} href='#' onClick={(e) => {
          e.preventDefault();
          setIsVertical(false)
        }}>
          <HorizontalBtnIcon isActive={!isVertical} />
        </a>
        <a href='#' onClick={(e) => {
          e.preventDefault();
          setIsVertical(true)
        }}>
          <VerticalBtnIcon isActive={isVertical} />
        </a>
      </div>
    </div>

    <ul className={`${classes.CardList} ${isVertical ? classes.Vertical : classes.Horizontal}`}>
      {data.map(((item, index) => {
        const isLastItem = index === mockCards.length - 1;
        const isNeighborBelow = index === currentHoveredCard - 1;
        const showDivider = !isLastItem && !isNeighborBelow;
        if (isVertical) {
          return <li key={index}>
            <VerticalCatalogCard data={item} title={index % 2 === 0 ? 'Toyota Camry VII (XV50)' : 'Toyota Camry VII (XV50) Very Long Title May be two or three lines'} />
          </li>
        } else {
          return <li key={index}>
            <CatalogCard data={item} showDivider={showDivider} setIsHovered={(isHovered) => {
              if (isHovered) {
                setCurrentHoveredCard(index)
              } else {
                setCurrentHoveredCard(-1)
              }
            }} />
          </li>
        }

      }))}

    </ul>

    <button className={classes.PrimaryButton}>Показать еще</button>
  </div>;
};
export default CatalogList;
