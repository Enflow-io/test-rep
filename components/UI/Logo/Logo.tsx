import classes from "./Logo.module.scss";

interface LogoProps {
    width?: number
    height?: number
}
export default ({ width, height }: LogoProps) => {
    return <a className={classes.Logo} href='/'>
        <div style={{
            width,
            height
        }}>Logo</div>
    </a>
}