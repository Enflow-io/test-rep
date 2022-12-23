import CatalogList from "../../Features/Catalog/CatalogList/CatalogList";
import BrandsList from "../../Features/MainPage/BrandsList/BrandsList";
import MainFilter from "../../Features/MainPage/MainFilter/MainFilter";
import MainPageTitle from "../../Features/MainPage/MainPageTitle/MainPageTitle";
import classes from "./MainScreen.module.scss";
import React from 'react'

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
            <CatalogList />
        </div>

    </div>
}


export default MainScreen;