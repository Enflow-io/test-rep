import React, { useRef, useState } from 'react';
import classes from './HoverGallery.module.scss';
import { debounce } from "lodash"
import { Pic } from '../../../interfaces/car.interface';
export interface HoverGalleryProps {
  style: React.CSSProperties
  pics: Pic[]
}

const HoverGallery = ({ style, pics }: HoverGalleryProps) => {
  const component = useRef(null);
  const [page, setPage] = useState(1)
  const [isPaginatorShown, setIsPaginatorShown] = useState(false);

  const mouseMove = debounce((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    if (component && component.current) {
      const componentElement: HTMLElement = component.current;
      const componentBounding = componentElement.getBoundingClientRect();
      const componentWidth = componentElement.offsetWidth;
      const componentX = componentBounding.x;
      const mouseX = event.screenX - componentX;
      const partWidth = componentWidth / 3;
      let pageNumber = Math.floor(mouseX / partWidth) + 1;
      if (pageNumber > 3) {
        pageNumber = 3;
      }
      if (pageNumber < 1) {
        pageNumber = 1;
      }

      setPage(pageNumber);
    }

  }, 5);

  const picsLinks = pics.slice(0, 3).map(el=>el.url);
  const images = [
    '',
    ...picsLinks
  ]
  return <div
    onMouseMove={mouseMove}
    onMouseEnter={() => {
      setIsPaginatorShown(true);
    }}
    onMouseLeave={() => {
      setIsPaginatorShown(false);
    }}
    className={classes.HoverGallery}
    style={style}
  >
    <div ref={component}
      className={classes.Img}
    >
      <img src={images[page]} />
    </div>
    {isPaginatorShown &&
      <div className={classes.Indicator}>
        <div className={`${classes.IndicatorBar} ${page === 1 ? classes.Active : null}`}></div>
        <div className={`${classes.IndicatorBar} ${page === 2 ? classes.Active : null}`}></div>
        <div className={`${classes.IndicatorBar} ${page === 3 ? classes.Active : null}`}></div>
      </div>}
  </div>;
};
export default HoverGallery;
