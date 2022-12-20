import React, { useState } from 'react';
import CancelIcon from '../../../Svg/CancelIcon';
import ExpanderIcon from '../../../Svg/ExpanderIcon';
import LocationIcon from '../../../Svg/LocationIcon';
import FilterButton from '../../../UI/Buttons/FilterButton/FilterButton';
import FilterDoubleInput from '../../../UI/Inputs/FilterDoubleInput/FilterDoubleInput';
import FilterLineInput from '../../../UI/Inputs/FilterLineInput/FilterLineInput';
import LocationButton from '../../../UI/Buttons/LocationButton/LocationButton';
import { PrimaryButton } from '../../../UI/Buttons/PrimaryButton/PrimaryButton';
import RangeInput from '../../../UI/Inputs/RangeInput/RangeInput';
import SelectInput from '../../../UI/Inputs/SelectInput/SelectInput';
import classes from './MainFilter.module.scss';
import TextInput from '../../../UI/Inputs/TextInput/TextInput';

export interface MainFilterProps {

}

const MainFilter = ({ }: MainFilterProps) => {

  const [isExpanded, setIsExpanded] = useState(false);


  const selectInputFonts = {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "13px"
  }

  return <div className={`${classes.MainFilter} ${isExpanded ? classes.ExpandedMode : ''}`}>
    <div className={classes.Header}>
      <div className={classes.CitySelector}><LocationButton /></div>
      <div className={`${classes.ModeSwitcher} ${isExpanded ? classes.Expanded : ''}`} onClick={() => {
        setIsExpanded(!isExpanded);
      }}>Расширенный поиск <ExpanderIcon /></div>
    </div>
    <div className={classes.Inputs}>
      <div className={classes.Row + ' ' + classes.MainLine}>
        <div className={classes.Col}>
          <SelectInput
            width='100%'
            height={50}
            instanceId={'auto-brand'}
            className={classes.Select}
            placeholder={"Марка авто"}
            options={[
              { value: 'Популярные', label: 'Популярные' },
              { value: 'Редкие', label: 'Редкие' },
              { value: 'Дешевые', label: 'Дешевые' },
              { value: 'Дорогие', label: 'Дорогие' }
            ]}
            fontStyles={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 16,
              color: "#7B869B"
            }}
            borderColor='#B5BCCB'
            borderRadius={10}
          />
        </div>
        <div className={classes.Col}>
          <SelectInput
            width='100%'
            height={50}
            instanceId={'model-auto'}
            className={classes.Select}
            placeholder={"Модель"}
            options={[
              { value: 'Популярные', label: 'Популярные' },
              { value: 'Редкие', label: 'Редкие' },
              { value: 'Дешевые', label: 'Дешевые' },
              { value: 'Дорогие', label: 'Дорогие' }
            ]}
            fontStyles={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 16,
              color: "#7B869B"
            }}
            borderColor='#B5BCCB'
            borderRadius={10}
          />
        </div>
        <div className={classes.Col}>
          <RangeInput />
        </div>
      </div>
      {isExpanded && <>
        <div className={classes.Divider}></div>
        <div className={classes.ExpandedFilters}>
          <div className={classes.ExpandedFilter}>
            <FilterDoubleInput
              firstLabel='Кузов'
              secondLabel='Трансмиссия'
              firstInput={<SelectInput
                width='100%'
                instanceId={'kuzov-auto'}
                className={classes.Select}
                placeholder={"Любой"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}
                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
              secondInput={<SelectInput
                width='100%'
                fontStyles={selectInputFonts}
                instanceId={'transmission-auto'}
                className={classes.Select}
                placeholder={"Любая"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}

                borderColor='#B5BCCB'
              />}
            />
          </div>
          <div className={classes.ExpandedFilter}>
            <FilterDoubleInput
              firstLabel='Двигатель'
              secondLabel='Привод'
              firstInput={<SelectInput
                fontStyles={selectInputFonts}
                width='100%'
                instanceId={'engine-auto'}
                className={classes.Select}
                placeholder={"Любой"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}
                borderColor='#B5BCCB'
              />}
              secondInput={<SelectInput
                width='100%'
                instanceId={'privod-auto'}
                className={classes.Select}
                fontStyles={selectInputFonts}
                placeholder={"Любой"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}

                borderColor='#B5BCCB'
              />}
            />
          </div>
          <div className={classes.ExpandedFilter}>
            <FilterLineInput
              label='Поколение'
              component={<SelectInput
                width='100%'
                instanceId={'evolution-level-auto'}
                className={classes.Select}
                placeholder={"Любое"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}
                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
            />

          </div>
          <div className={classes.ExpandedFilter}>
            <FilterDoubleInput
              firstLabel='Цена (₽)'
              secondLabel=''
              firstInput={<SelectInput
                width='100%'
                instanceId={'price-auto'}
                className={classes.Select}
                placeholder={"От"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}
                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
              secondInput={<SelectInput
                width='100%'
                instanceId={'price-auto-to'}
                className={classes.Select}
                placeholder={"До"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}

                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
            />
          </div>
          <div className={classes.ExpandedFilter}>
            <FilterDoubleInput
              firstLabel='Пробег (км)'
              secondLabel=''
              firstInput={<TextInput placeholder='От' type='number' />}
              secondInput={<TextInput placeholder='До' type='number' />}
            />
          </div>
          <div className={classes.ExpandedFilter}>
            <FilterDoubleInput
              firstLabel='Объем двигателя'
              secondLabel=''
              firstInput={<SelectInput
                width='100%'
                instanceId={'engine-volume-auto'}
                className={classes.Select}
                placeholder={"От"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}
                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
              secondInput={<SelectInput
                width='100%'
                instanceId={'engine-vol-to'}
                className={classes.Select}
                placeholder={"До"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}

                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
            />
          </div>
          <div className={classes.ExpandedFilter}>
            <FilterDoubleInput
              firstLabel='Мощность двигателя (л.с.)'
              secondLabel=''
              firstInput={<SelectInput
                width='100%'
                instanceId={'engine-power-auto'}
                className={classes.Select}
                placeholder={"От"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}
                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
              secondInput={<SelectInput
                width='100%'
                instanceId={'engine-power-auto-to'}
                className={classes.Select}
                placeholder={"До"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}

                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
            />
          </div>
          <div className={classes.ExpandedFilter}>
            <FilterLineInput
              label='Руль'
              component={<SelectInput
                width='100%'
                instanceId={'rul-auto'}
                className={classes.Select}
                placeholder={"Любой"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}
                borderColor='#B5BCCB'
              />}
            />
          </div>
          <div className={classes.ExpandedFilter}>
            <FilterDoubleInput
              firstLabel='Количество владельцев'
              secondLabel=''
              firstInput={<SelectInput
                width='100%'
                instanceId={'owners-qnt-auto'}
                className={classes.Select}
                placeholder={"От"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}
                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
              secondInput={<SelectInput
                width='100%'
                instanceId={'owners-qnt-to-auto'}
                className={classes.Select}
                placeholder={"До"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}

                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
            />
          </div>
          <div className={classes.ExpandedFilter}>
            <FilterLineInput
              label='Тип продавца'
              component={<SelectInput
                width='100%'
                instanceId={'saler-type-auto'}
                className={classes.Select}
                placeholder={"Любой"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}
                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
            />
          </div>
          <div className={classes.ExpandedFilter}>
            <FilterLineInput
              label='Доска объявлений'
              component={<SelectInput
                width='100%'
                instanceId={'source-auto'}
                className={classes.Select}
                placeholder={"Любая"}
                options={[
                  { value: 'Популярные', label: 'Популярные' },
                  { value: 'Редкие', label: 'Редкие' },
                  { value: 'Дешевые', label: 'Дешевые' },
                  { value: 'Дорогие', label: 'Дорогие' }
                ]}
                borderColor='#B5BCCB'
                fontStyles={selectInputFonts}
              />}
            />
          </div>
        </div>
        <div className={classes.Divider}></div>
      </>}
    </div>
    <div className={classes.Footer}>
      <FilterButton
        title='Подобрать авто'
        type="primary"
      />
      <FilterButton
        title='Поиск на карте'
        type="primary-light"
        icon={<LocationIcon />}
      />
      {/* {isExpanded && */}
        <div className={classes.CancelContainer} style={{
          visibility: !isExpanded ? 'hidden' : 'visible'
        }}>
          <FilterButton
            title='Сбросить'
            type="cancel"
            icon={<CancelIcon />}
          />
        </div>
      {/* } */}

    </div>

  </div>;
};
export default MainFilter;
