import React from 'react';
import AutoIcon from '../../../Svg/AutoIcon';
import JobIcon from '../../../Svg/JobIcon';
import MarketsIcon from '../../../Svg/MarketsIcon';
import PropertyIcon from '../../../Svg/PropertyIcon';
import MenuButton from '../../Header/MenuButton';
import classes from './DesktopMenu.module.scss';

export interface DesktopMenuProps {
  className?: string
}

const DesktopMenu = (props: DesktopMenuProps) => {


  return <ul className={`${classes.DesktopMenu} ${props.className}`}>
                    <li>
                        <MenuButton
                            title="Работа"
                            icon={<JobIcon />}
                            link={'/job'}

                        />
                    </li>
                    <li>
                        <MenuButton
                            title="Авто"
                            icon={<AutoIcon />}
                            link={'/auto'}
                        />
                    </li>
                    <li>
                        <MenuButton
                            title="Недвижимость"
                            icon={<PropertyIcon />}
                            link={'/property'}
                        />
                    </li>
                    <li>
                        <MenuButton
                            title="Маркетплейсы"
                            icon={<MarketsIcon />}
                            link={'/marketplaces'}
                        />
                    </li>
                </ul>
  
};
export default DesktopMenu;
