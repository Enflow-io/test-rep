import Link from "next/link";
import classes from "./Logo.module.scss";

interface LogoProps {
    width?: number
    height?: number
}
export default ({ width, height }: LogoProps) => {
    return <Link legacyBehavior href={"/"}>
        <a className={classes.Logo}>
            <div style={{
                width,
                height
            }}>Logo</div>
        </a>
    </Link>
}