import classes from "./MainScreen.module.scss";

const MainScreen = () => {
    return <div className={classes.MainScreen}>
        <div className={classes.ImgContainer}>
        </div>
        <div className={classes.Blackout}>
        </div>

        <div className={classes.Content} >
            <div>
                Aгрегатор по поиску автомобилей
                со всей России
            </div>
        </div>

    </div>
}


export default MainScreen;