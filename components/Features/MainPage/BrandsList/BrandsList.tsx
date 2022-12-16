import React from 'react';
import { Brand } from '../../../../interfaces/brand.interface';
import classes from './BrandsList.module.scss';

export interface BrandsListProps {

}

const BrandsList = ({ }: BrandsListProps) => {
  return <div className={classes.BrandsList}>
    <ul>
      {BrandsListData.map(el => {
        return <li key={el.name}>
          <a href=''>
            <img width={30} src={el.imgUrl} /><span>{el.name}</span>
          </a>
        </li>
      })}
    </ul>
    <a className={classes.BrandLink} href='#'>Показать все марки</a>
  </div>;
};


const BrandsListData: Brand[] = [
  {
    imgUrl: "/img/brands/audi.png",
    name: "Audi"
  },
  {
    imgUrl: "/img/brands/bmw.jpg",
    name: "BMW"
  },
  {
    imgUrl: "/img/brands/chevrolet.png",
    name: "Chevrolet"
  },
  {
    name: "Ford",
    imgUrl: "/img/brands/ford.png"
  },
  {
    name: "Hyndai",
    imgUrl: "/img/brands/hunday.png"
  },
  {
    name: "Kia",
    imgUrl: "/img/brands/kia.png"
  },
  {
    name: "LADA",
    imgUrl: "/img/brands/lada.png"
  },
  {
    imgUrl: "/img/brands/merc.png",
    name: "Mersedes-Benz"
  },
  {
    name: "Mitsubishi",
    imgUrl: "/img/brands/mitsubishi.png"
  },
  {
    name: "Nissan",
    imgUrl: "/img/brands/nissan.png"
  },
  {
    name: "Renault",
    imgUrl: "/img/brands/renault.png"
  },
  {
    name: "Skoda",
    imgUrl: "/img/brands/skoda.png"
  },
  {
    imgUrl: "/img/brands/tayota.png",
    name: "Toyota"
  },
  {
    imgUrl: "/img/brands/vw.png",
    name: "Volkswagen"
  },
]

export default BrandsList;
