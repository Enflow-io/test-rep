import React from 'react'
import SvgInterface from '../../../interfaces/SvgInterface'

export default React.memo(({ width, height, color, ...other }: SvgInterface) => {
    return <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.615 0.584027C16.011 0.338028 7.98399 0.339028 4.385 0.584027C0.488 0.850027 0.029 3.20402 0 9.40002C0.029 15.585 0.484 17.949 4.385 18.216C7.98499 18.461 16.011 18.462 19.615 18.216C23.512 17.95 23.971 15.596 24 9.40002C23.971 3.21502 23.516 0.851027 19.615 0.584027V0.584027ZM8.99999 13.4V5.40002L17 9.39302L8.99999 13.4V13.4Z" fill="white" />
    </svg>




})