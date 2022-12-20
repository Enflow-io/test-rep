import React from 'react'
import SvgInterface from '../../interfaces/SvgInterface';

export default React.memo(function AutoIcon({ width, height, color, ...other }: SvgInterface) {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#F8F8F8" />
        <path d="M6.90944 14.2219C6.59702 13.9095 6.59702 13.403 6.90944 13.0906L11.4349 8.56508C11.7473 8.25266 12.2539 8.25266 12.5663 8.56508L17.0918 13.0906C17.4042 13.403 17.4042 13.9095 17.0918 14.2219C16.7794 14.5344 16.2728 14.5344 15.9604 14.2219L12.0006 10.2621L8.04081 14.2219C7.72839 14.5344 7.22185 14.5344 6.90944 14.2219Z" fill="#3B85F7" />
    </svg>


})