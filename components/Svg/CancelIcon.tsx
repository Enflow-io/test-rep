import React from 'react'
import SvgInterface from '../../interfaces/SvgInterface';

export default React.memo(function AutoIcon({ width, height, color, ...other }: SvgInterface) {
    return <svg width={width || "13"} height={height || "12"} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.236 1.53866C12.588 1.18667 12.588 0.615985 12.236 0.26399C11.884 -0.0879944 11.3133 -0.0879992 10.9613 0.26399L6.5 4.72533L2.03866 0.26399C1.68667 -0.0880041 1.11598 -0.0879992 0.763994 0.26399C0.412004 0.61598 0.412 1.18666 0.763994 1.53866L5.22533 6L0.763994 10.4613C0.412004 10.8133 0.412 11.384 0.763994 11.736C1.11599 12.088 1.68667 12.088 2.03866 11.736L6.5 7.27467L10.9613 11.736C11.3133 12.088 11.884 12.088 12.236 11.736C12.588 11.384 12.588 10.8133 12.236 10.4613L7.77467 6L12.236 1.53866Z" fill="#DA3832" />
    </svg>


})