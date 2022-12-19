import React from 'react';
import HorizontalBtnIcon from '../../../Svg/HorizontalBtnIcon';
import VerticalBtnIcon from '../../../Svg/VerticalBtnIcon';
import SelectInput from '../../../UI/SelectInput/SelectInput';
import CatalogCard from '../CatalogCard/CatalogCard';
import classes from './CatalogList.module.scss';

export interface CatalogListProps {

}

const CatalogList = ({ }: CatalogListProps) => {
  return <div className={classes.CatalogList}>
    <div className={classes.Header}>
      <h3>Последние предложения</h3>
      <div className={classes.HeaderMenu}>
        <SelectInput
        className={classes.Select}
          value={{ value: 'Популярные', label: 'Популярные' }}
          options={[
            { value: 'Популярные', label: 'Популярные' },
            { value: 'Редкие', label: 'Редкие' },
            { value: 'Дешевые', label: 'Дешевые' },
            { value: 'Дорогие', label: 'Дорогие' }
          ]} />

        <SelectInput
          value={{ value: 'За все время', label: 'За все время' }}
          options={[
            { value: 'За все время', label: 'За все время' },
            { value: 'За месяц', label: 'За месяц' },
          ]} />

        <div className={classes.Divider}></div>

        <a className={classes.HorizontalBtn} href='#'>
          <HorizontalBtnIcon />
        </a>
        <a href='#'>
          <VerticalBtnIcon />
        </a>
      </div>
    </div>

    <ul className={classes.CardList}>
      <li><CatalogCard /></li>
      <li><CatalogCard /></li>
      <li><CatalogCard /></li>
      <li><CatalogCard /></li>
      <li><CatalogCard /></li>
      <li><CatalogCard /></li>
      <li><CatalogCard /></li>
      <li><CatalogCard /></li>
    </ul>
  </div>;
};
export default CatalogList;
