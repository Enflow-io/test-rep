import OKIcon from "../../Svg/Socials/OKIcon"
import TGIcon from "../../Svg/Socials/TGIcon"
import TwitterIcon from "../../Svg/Socials/TwitterIcon"
import VKIcon from "../../Svg/Socials/VKIcon"
import YoutubeIcon from "../../Svg/Socials/YoutubeIcon"
import Logo from "../../UI/Logo/Logo"
import classes from "./Footer.module.scss"
interface FooterProps {

}

const Footer = (props: FooterProps) => {
    return <div className={classes.Footer}>
        <div className={classes.Container}>
            <div className={classes.Row}>
                <div className={classes.Col}>
                    <Logo width={205} height={30} />
                    <div className={classes.UnderLogoText} >
                        Агрегатор по поиску автомобилей<br /> со всей России
                    </div>
                </div>

                <div className={classes.Col}>
                    <label>Карта сайта:</label>
                    <ul className={classes.SiteMap}>
                        <li>
                            <a href='/'>Политика конфиденциальности</a>
                        </li>
                        <li>
                            <a href='/'>Пункт 2</a>
                        </li>
                        <li>
                            <a href='/'>Пункт 3</a>
                        </li>
                    </ul>
                </div>

                <div className={classes.Col}>
                    <label>Контакты:</label>
                    <ul className={classes.Contacts}>
                        <li>
                            <a href='tel:+7 923 154 89 68'>+7 923 154 89 68</a>
                        </li>
                        <li>
                            <a href='mailto:mail@mail.ru'>mail@mail.ru</a>
                        </li>

                    </ul>
                </div>

                <div className={classes.Col}>
                    <label>Мы в социальных сетях:</label>
                    <ul className={classes.Socials}>
                        <li><a href=""><TwitterIcon /></a></li>
                        <li><a href=""><VKIcon /></a></li>
                        <li><a href=""><YoutubeIcon /></a></li>
                        <li><a href=""><OKIcon /></a></li>
                        <li><a href=""><TGIcon /></a></li>
                       
                    </ul>
                </div>


            </div>
            <div className={`${classes.Row} ${classes.BottomRow}`}>
                2022 ©АВТО АВТО | All rights reserved
            </div>
        </div>
    </div>
}

export default Footer