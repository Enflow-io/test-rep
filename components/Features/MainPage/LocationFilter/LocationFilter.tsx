import React, { useRef, useState } from 'react';
import classes from './LocationFilter.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import CancelIcon from '../../../Svg/CancelIcon';
import SearchIcon from '../../../Svg/SearchIcon';
import useOnClickOutside from '../../../../Hooks/userOutsideHook';

export interface LocationFilterProps {
  onClose: () => void
}

const LocationFilter = ({ onClose }: LocationFilterProps) => {
  const [inputText, setInputText] = useState('')

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => onClose());

  const onInputChange = (item: React.ChangeEvent<HTMLInputElement>) => {
    const value = item.target.value;
    setInputText(value);
  }

  const data = [];
  const names = [
    'Новосибирск',
    'Новосибирская область',
    'Москва',
    'Санкт-Петербург',
    'Воронеж'
  ]
  for (let i = 1; i < 100; i++) {
    data.push({
      id: i,
      label: names[Math.floor(Math.random() * names.length)]
    })
  }
  const onSelectCity = () => {
    setInputText('')
  }

  return <div ref={ref} className={classes.LocationFilter}>
    <div className={classes.Header}>
      <div className={classes.SearchInput}>
        <SearchIcon />
        <input value={inputText} onChange={onInputChange} placeholder='Регион, город, населенный пункт' />
      </div>

    </div>

    <div className={classes.Divider}></div>

    <div className={classes.Content}>
      {inputText.length > 0 && <ul className={classes.CityList}>
        {data.map(el => {
          return <li key={el.id} onClick={onSelectCity}>{el.label}</li>
        })}
      </ul>}
      {inputText.length === 0 && <>
        <div className={classes.TagsList}>
          <div className={classes.Tag}>Москва<CancelIcon width={10} height={10} /></div>
          <div className={classes.Tag}>Новосибирская область<CancelIcon width={10} height={10} /></div>
          <div className={classes.Tag}>Санкт-Петербург<CancelIcon width={10} height={10} /></div>
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.Slider}>
          <label>Расширение радиуса поиска, км</label>
          <Slider

            handleStyle={{
              background: '#3C85F7'
            }}
            trackStyle={{
              background: '#3C85F7'
            }}
            dotStyle={{
              background: '#B5BCCB42'
            }}
            railStyle={{
              background: '#B5BCCB42'
            }}
            activeDotStyle={{
              borderColor: '#3C85F7',
              background: '#3C85F7'
            }}
            defaultValue={100}
            min={0}
            max={1000}
            step={null}
            marks={{
              0: 0,
              166: "100",
              332: 200,
              500: 300,
              666: 400,
              830: 500,
              1000: 1000
            }}
          />
        </div>
      </>}
    </div>
    <div className={classes.DividerFull}></div>

    <div className={classes.Footer}>
      <a href='#' onClick={(e)=>{
        e.preventDefault();
        onClose();
      }}>Сохранить</a>
    </div>

  </div>;
};
export default LocationFilter;
