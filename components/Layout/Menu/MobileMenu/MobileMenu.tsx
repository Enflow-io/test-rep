import React, { createElement, FunctionComponent, ReactElement, useRef, useState } from 'react';
import { isTemplateMiddle } from 'typescript';
import useOnClickOutside from '../../../../Hooks/userOutsideHook';
import SvgInterface from '../../../../interfaces/SvgInterface';
import AutoIcon from '../../../Svg/AutoIcon';
import JobIcon from '../../../Svg/JobIcon';
import MarketsIcon from '../../../Svg/MarketsIcon';
import PropertyIcon from '../../../Svg/PropertyIcon';
import MenuButton from '../../Header/MenuButton';
import Items, { MenuItem } from '../MenuItems';
import classes from './MobileMenu.module.scss';

export interface MobileMenuProps {
  activeItem: MenuItem
  className?: string
}

const MobileMenu = ({ activeItem, className = '' }: MobileMenuProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, (event: any) => {
    const isTargetButton = event.path.some((el: HTMLElement) => {
      if (el.getAttribute) {
        const id = el.getAttribute("id");
        return id === "mobile-menu";
      } else {
        return false;
      }
    })
    if (!isTargetButton) {
      setIsExpanded(false)
    }

  });


  const Icon = activeItem.icon;
  return <div id='mobile-menu' className={`${classes.MobileMenu} ${className}`}>
    <span onClick={() => {
      setIsExpanded(!isExpanded);
    }}>
      <div className={classes.ButtonContainer}>
        <Icon color='#3B85F7' />
        {/* {createElement(item.icon, {color: ''})} */}
        <a>{activeItem.title}</a>
      </div>
      <div className={classes.Icon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.90944 9.77806C6.59702 10.0905 6.59702 10.597 6.90944 10.9094L11.4349 15.4349C11.7473 15.7473 12.2539 15.7473 12.5663 15.4349L17.0918 10.9094C17.4042 10.597 17.4042 10.0905 17.0918 9.77806C16.7794 9.46565 16.2728 9.46565 15.9604 9.77806L12.0006 13.7379L8.04081 9.77806C7.72839 9.46565 7.22185 9.46565 6.90944 9.77806Z" fill="#3B85F7" />
        </svg>

      </div>

    </span>



    {isExpanded &&
      <div ref={ref} className={classes.ExpandedMenuCont}>
        <ul className={classes.ExpandedMenu}>
          {Items.map((item) => {
            return <li key={item.title}>
              <MenuButton
                title={item.title}
                icon={createElement(item.icon)}
                link={item.link}
              />
            </li>
          })}

          {/* <li className={classes.Active}>
            <MenuButton
              title="Авто"
              icon={<AutoIcon color='#3B85F7' />}
              link={'/auto'}
            />
          </li> */}

        </ul>
      </div>}

  </div>;
};
export default MobileMenu;
