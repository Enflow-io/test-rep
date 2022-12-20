import Link from "next/link"
import { useRouter } from "next/router"
import { title } from "process"
import classes from "./Header.module.scss"

interface MenuButtonProps {
    title?: React.ReactNode
    icon?: any
    link?: string
}

const MenuButton = (props: MenuButtonProps) => {
    const router = useRouter();
    const link = props.link || "/";
    const isActive = router.pathname === link;
    const iconOnly = !props.title && !!props.icon;
    return <Link legacyBehavior href={link}>
        <a className={`${classes.MenuButton} ${iconOnly ? classes.IconButton : null} ${isActive ? classes.Active : null}`}>
            {props.icon && props.icon}
            {props.title && <span>{props.title}</span>}
        </a>
    </Link>
}

export default MenuButton;