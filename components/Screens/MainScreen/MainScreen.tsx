import BrandsList from "../../Features/MainPage/BrandsList/BrandsList";
import MainFilter from "../../Features/MainPage/MainFilter/MainFilter";
import MainPageTitle from "../../Features/MainPage/MainPageTitle/MainPageTitle";
import classes from "./MainScreen.module.scss";

const MainScreen = () => {
    return <div className={classes.MainScreen}>
        <div className={classes.ImgContainer}>
        </div>
        <div className={classes.Blackout}>
        </div>

        <div className={classes.Content} >
            <MainPageTitle />
            <MainFilter />
            <BrandsList />
        </div>

    </div>
}


export default MainScreen;