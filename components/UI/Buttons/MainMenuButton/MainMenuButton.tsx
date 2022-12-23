import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import classes from './MainMenuButton.module.scss';

export interface MainMenuButtonProps {
  title?: React.ReactNode
  icon?: any
  link: string
  onClick?: () => void
  id?: string
  isActive: boolean
}

const MainMenuButton = (props: MainMenuButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const link = props.link || "/";
  const isActive = router.pathname === link;
  const Icon = props.icon;
  return <Link href={link}>
    <div onMouseEnter={() => {
      setIsHovered(true)
    }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={`${classes.MainMenuButton} ${isActive ? classes.Active : null}`}>
      <div className={classes.ButtonContainer}>
        {/* <Icon color='#3B85F7' /> */}
        <Icon color={(isActive || isHovered) ? "#3B85F7" : undefined} />
        <span>{props.title}</span>
      </div>
    </div>
  </Link>
};
export default MainMenuButton;
