import { useEffect, useState } from "react"
import AutoIcon from "../../Svg/AutoIcon"
import EnterIcon from "../../Svg/EnterIcon"
import EyeBtnIcon from "../../Svg/EyeBtnIcon"
import FavoriteBtnIcon from "../../Svg/FavoriteBtnIcon"
import JobIcon from "../../Svg/JobIcon"
import MarketsIcon from "../../Svg/MarketsIcon"
import PropertyIcon from "../../Svg/PropertyIcon"
import { PrimaryButton } from "../../UI/Buttons/PrimaryButton/PrimaryButton"
import Logo from "../../UI/Logo/Logo"
import classes from "./Header.module.scss"
import MenuButton from "./MenuButton"

interface HeaderProps {

}

const Header = (props: HeaderProps) => {
    const [hasNotifications, setHasNotifications] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setHasNotifications(true)
        }, 800);
        
    }, []);
    return <div className={classes.Header}>
        <div className={classes.Container}>
            <div className={classes.LeftPart}>
                <Logo width={100} height={36} />
                <ul className={classes.Menu}>
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

                    <PrimaryButton title="Создать объявление" />

                </div>



            </div>
        </div>

    </div >
}

export default Header