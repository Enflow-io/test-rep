import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import * as React from 'react';
import classes from "./Template.module.scss"
import headerClasses from "./../Header/Header.module.scss"
import footerClasses from "./../Footer/Footer.module.scss"
// import { Montserrat } from '@next/font/google'
import { useState } from "react";
// const font = Montserrat()


interface TemplateProps {

}

const Template: React.FC<React.PropsWithChildren<TemplateProps>> = ({ children }) => {
    const [minContentHeight, setMinContentHeight] = useState(0);
    const [minContentHeight2, setMinContentHeight2] = useState(0);

    const calculateHeights = () => {
        const headerEl: HTMLElement | null = document.querySelector(`.${headerClasses.Header}`);
        const footerEl: HTMLElement | null = document.querySelector(`.${footerClasses.Footer}`);
        const windowHeight = window.innerHeight;

        if (headerEl && footerEl) {
            const newMinContentHeight = windowHeight - headerEl.offsetHeight - footerEl.offsetHeight;
            setMinContentHeight(newMinContentHeight)
        }
    }
    React.useEffect(() => {
        calculateHeights()
    }, []);

    React.useEffect(() => {
        window.addEventListener("resize", calculateHeights, true);

        return () => {
            window.removeEventListener("resize", calculateHeights);
        }
    }, []);


    // return <main className={`${classes.Template} ${font.className}`}>
    return <main className={`${classes.Template}`}>
        <Header />
        <div className={classes.Container} style={{
            minHeight: minContentHeight
        }}>
            {children}
        </div>
        <Footer />
    </main>
}

export default Template