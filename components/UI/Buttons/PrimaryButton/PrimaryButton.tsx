import PlusIcon from "../../../Svg/PlusIcon";
import classes from "./PrimaryButton.module.scss";
interface PrimaryButtonProps {
    title: string
    style?: React.CSSProperties
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
    return <button style={{
        ...props.style
    }} className={classes.PrimaryButton}>
        <PlusIcon />{props.title}
    </button>
}