import { title } from "process"
import classes from "./Header.module.scss"

interface MenuButtonProps {
    title?: React.ReactNode
    icon?: any
}

const MenuButton = (props: MenuButtonProps) => {
    const iconOnly = !props.title && !!props.icon;
    return <a className={`${classes.MenuButton} ${iconOnly ? classes.IconButton : null}`} href="">
        {props.icon && props.icon}
        {props.title && <span>{props.title}</span>}
    </a>
}

export default MenuButton;