import PlusIcon from "../../../Svg/PlusIcon";
import classes from "./PrimaryButton.module.scss";

export const PrimaryButton = () => {
    return <button className={classes.PrimaryButton}>
        <PlusIcon />Создать объявление
    </button>
}