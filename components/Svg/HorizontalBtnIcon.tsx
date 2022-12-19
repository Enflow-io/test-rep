import React from 'react'
import SvgInterface from '../../interfaces/SvgInterface';

export default React.memo(({ width, height, color, ...other }: SvgInterface) => {
    return <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="white" />
        <rect x="9" y="12" width="18" height="4" rx="1.5" fill="#DDE0E5" />
        <rect x="9" y="20" width="18" height="4" rx="1.5" fill="#DDE0E5" />
        <rect x="0.5" y="0.5" width="35" height="35" rx="7.5" stroke="#B5BCCB" stroke-opacity="0.33" />
    </svg>


})