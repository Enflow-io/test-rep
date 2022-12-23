import React from 'react'
import classes from "./svg.module.scss";
import SvgInterface from '../../interfaces/SvgInterface';
interface CardsTypesSvgBtn extends SvgInterface {
    isActive?: boolean
}

export default React.memo(({ width, height, color, isActive, ...other }: CardsTypesSvgBtn) => {
    return <svg className={`${classes.Svg} ${isActive ? classes.Active : null}`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="white" />
        <rect className={classes.Highlight} x="9" y="12" width="18" height="4" rx="1.5" fill={color || "#DDE0E5"} />
        <rect className={classes.Highlight} x="9" y="20" width="18" height="4" rx="1.5" fill={color || "#DDE0E5"} />
        <rect x="0.5" y="0.5" width="35" height="35" rx="7.5" stroke="#B5BCCB" strokeOpacity="0.33" />
    </svg>


})