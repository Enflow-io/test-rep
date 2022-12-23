import React from 'react';
import AutoIcon from '../../../Svg/AutoIcon';
import JobIcon from '../../../Svg/JobIcon';
import MarketsIcon from '../../../Svg/MarketsIcon';
import PropertyIcon from '../../../Svg/PropertyIcon';
import MainMenuButton from '../../../UI/Buttons/MainMenuButton/MainMenuButton';
import MenuButton from '../../Header/MenuButton';
import { MenuItem } from '../MenuItems';
import classes from './DesktopMenu.module.scss';

export interface DesktopMenuProps {
  className?: string
  activeItem: MenuItem
}

const DesktopMenu = (props: DesktopMenuProps) => {

  const activeItem = props.activeItem;

  return <ul className={`${classes.DesktopMenu} ${props.className}`}>
    <li>
      <MainMenuButton
        title="Работа"
        icon={JobIcon}
        link={'/job'}
        isActive={activeItem.link === "/job"}

      />
    </li>
    <li>
      <MainMenuButton
        title="Авто"
        icon={AutoIcon}
        link={'/auto'}
        isActive={activeItem.link === "/auto"}
      />
    </li>
    <li>
      <MainMenuButton
        title="Недвижимость"
        icon={PropertyIcon}
        link={'/property'}
        isActive={activeItem.link === "/property"}
      />
    </li>
    <li>
      <MainMenuButton
        title="Маркетплейсы"
        icon={MarketsIcon}
        link={'/marketplaces'}
        isActive={activeItem.link === "/marketplaces"}
      />
    </li>
  </ul>

};
export default DesktopMenu;
