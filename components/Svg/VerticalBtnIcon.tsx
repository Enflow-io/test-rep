import React from 'react'
import SvgInterface from '../../interfaces/SvgInterface';

export default React.memo(({ width, height, color, ...other }: SvgInterface) => {
    return <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="white" />
        <rect x="9" y="9" width="8" height="8" rx="2" fill="#DDE0E5" />
        <rect x="19" y="9" width="8" height="8" rx="2" fill="#DDE0E5" />
        <rect x="9" y="19" width="8" height="8" rx="2" fill="#DDE0E5" />
        <rect x="19" y="19" width="8" height="8" rx="2" fill="#DDE0E5" />
        <rect x="0.5" y="0.5" width="35" height="35" rx="7.5" stroke="#DDE0E5" stroke-opacity="0.33" />
    </svg>



})