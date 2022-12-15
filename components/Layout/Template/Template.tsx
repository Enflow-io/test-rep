import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import * as React from 'react';
import classes from "./Template.module.scss"
import { Montserrat } from '@next/font/google'
const font = Montserrat()


interface TemplateProps {

}

const Template: React.FC<React.PropsWithChildren<TemplateProps>> = ({ children }) => {
    return <main className={`${classes.Template} ${font.className}`}>
    {/* return <main className={`${classes.Template}`}> */}
        <Header />
        <div className={classes.Container}>
            {children}
        </div>
        <Footer />
    </main>
}

export default Template