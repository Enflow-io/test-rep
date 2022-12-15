import AutoIcon from "../../Svg/AutoIcon"
import EnterIcon from "../../Svg/EnterIcon"
import EyeBtnIcon from "../../Svg/EyeBtnIcon"
import FavoriteBtnIcon from "../../Svg/FavoriteBtnIcon"
import JobIcon from "../../Svg/JobIcon"
import MarketsIcon from "../../Svg/MarketsIcon"
import PropertyIcon from "../../Svg/PropertyIcon"
import { PrimaryButton } from "../../UI/Buttons/PrimaryButton/PrimaryButton"
import classes from "./Header.module.scss"
import MenuButton from "./MenuButton"

interface HeaderProps {

}

const Header = (props: HeaderProps) => {
    return <div className={classes.Header}>
        <div className={classes.Container}>
            <div className={classes.LeftPart}>
                <a className={classes.Logo} href='/'>
                    <div>Logo</div>
                </a>
                <ul className={classes.Menu}>
                    <li>
                        <MenuButton
                            title="Работа"
                            icon={<JobIcon />}

                        />
                    </li>
                    <li>
                        <MenuButton
                            title="Авто"
                            icon={<AutoIcon />}
                        />
                    </li>
                    <li>
                        <MenuButton
                            title="Недвижимость"
                            icon={<PropertyIcon />}
                        />
                    </li>
                    <li>
                        <MenuButton
                            title="Маркетплейсы"
                            icon={<MarketsIcon />}
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
                                icon={<FavoriteBtnIcon hasNotifications={true} />}
                            />
                        </li>
                        <li>
                            <MenuButton
                                icon={<EyeBtnIcon />}
                            />
                        </li>
                    </ul>

                    <PrimaryButton />

                </div>



            </div>
        </div>

    </div >
}

export default Header