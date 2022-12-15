import classes from "./Footer.module.scss"
interface FooterProps {

}

const Footer = (props: FooterProps) => {
    return <div className={classes.Footer}>
    <div className={classes.Container}>Footer</div>
</div>
}

export default Footer