import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AutoIcon from "../../Svg/AutoIcon"
import EnterIcon from "../../Svg/EnterIcon"
import EyeBtnIcon from "../../Svg/EyeBtnIcon"
import FavoriteBtnIcon from "../../Svg/FavoriteBtnIcon"
import JobIcon from "../../Svg/JobIcon"
import MarketsIcon from "../../Svg/MarketsIcon"
import PlusIcon from "../../Svg/PlusIcon"
import PropertyIcon from "../../Svg/PropertyIcon"
import { PrimaryButton } from "../../UI/Buttons/PrimaryButton/PrimaryButton"
import Logo from "../../UI/Logo/Logo"
import DesktopMenu from "../Menu/DesktopMenu/DesktopMenu"
import Items from "../Menu/MenuItems"
import MobileMenu from "../Menu/MobileMenu/MobileMenu"
import classes from "./Header.module.scss"
import MenuButton from "./MenuButton"

interface HeaderProps {

}

const Header = (props: HeaderProps) => {
    const router = useRouter();
    const [hasNotifications, setHasNotifications] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setHasNotifications(true);
        }, 800);

    }, []);

    let activeItem = Items.find(el => {
        return el.link === router.pathname;
    })

    activeItem = activeItem ? activeItem : {
        title: "Главная",
        icon: JobIcon,
        link: "/"
    };




    return <div className={classes.Header}>
        <div className={classes.Container}>
            <div className={classes.LeftPart}>
                <Logo width={100} height={36} />
                <DesktopMenu className={classes.DesktopMenu} />
                <MobileMenu activeItem={activeItem} className={classes.MobileMenu} />
            </div>


            <div className={classes.RightPart}>

                <div className={classes.UserMenu}>
                    <MenuButton
                        title="Войти"
                        icon={<EnterIcon />}
                    />
                    <div className={classes.Divider}></div>
                    <ul>
                        <li>
                            <MenuButton
                                icon={<FavoriteBtnIcon hasNotifications={hasNotifications} />}
                            />
                        </li>
                        <li>
                            <MenuButton
                                icon={<EyeBtnIcon />}
                            />
                        </li>
                    </ul>

                    <button className={classes.PrimaryButton}>
                        <PlusIcon /><span>Создать объявление</span>
                    </button>

                </div>



            </div>
        </div>

    </div >
}

export default Header