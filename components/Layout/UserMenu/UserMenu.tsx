import Link from 'next/link';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import useOnClickOutside from '../../../Hooks/userOutsideHook';
import { setAuthState } from '../../../store/authSlice';
import classes from './UserMenu.module.scss';

export interface UserMenuProps {
  close: () => void
}

const UserMenu = ({ close }: UserMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useOnClickOutside(ref, (event: any) => {
    const isTargetButton = event.path.some((el: HTMLElement) => {
      if (el.getAttribute) {
        const id = el.getAttribute("id");
        return id === "user-menu-button";
      } else {
        return false;
      }
    })
    if (!isTargetButton) {
      close()
    }

  });

  return <div ref={ref} className={classes.UserMenu}>
    <ul>
      <li>
        <Link href="/">Профиль</Link>
      </li>
      <li>
        <Link href="/">Мои объявления</Link>
      </li>
      <li>
        <Link href="/">Избранное</Link>
      </li>
      <li>
        <Link onClick={(e) => {
          e.preventDefault();
          dispatch(setAuthState(false))
        }} href="/">Выйти</Link>
      </li>
    </ul>
  </div>;
};
export default UserMenu;
