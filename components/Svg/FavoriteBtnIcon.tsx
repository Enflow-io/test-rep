import React from 'react'
import SvgInterface from '../../interfaces/SvgInterface';

interface FavoriteBtnIconProps extends SvgInterface {
    hasNotifications: boolean
}

export default React.memo(({ width, height, color, hasNotifications, ...other }: FavoriteBtnIconProps) => {
    return <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.208 4.70016C17.0921 3.58464 15.5947 2.97269 14.0433 3.00094C12.479 3.00172 11.0566 4.01121 10.0192 5.14075C8.97104 4.01068 7.53 3.00172 5.9567 3.00094C4.40524 2.97269 2.9078 3.58464 1.79196 4.70016C0.675942 5.81584 0.0324006 7.34417 0 8.94973V8.95367C0 10.5591 0.628395 12.0048 1.64795 13.0751L1.92311 13.3398L9.33204 20.7085C9.70783 21.0973 10.3323 21.0972 10.708 20.7083L18.0863 13.3301C18.6861 12.7834 19.1667 12.1107 19.4965 11.3572C19.8268 10.6021 19.9985 9.7829 20 8.95403L19.9999 8.94973C19.9675 7.34417 19.324 5.81584 18.208 4.70016ZM18.0535 8.95543C18.053 10.1292 17.5404 11.1954 16.732 11.9367L10.0196 18.6382L3.28365 11.9421L3.06383 11.7344C2.71128 11.3717 2.43078 10.9397 2.23886 10.463C2.04666 9.98568 1.94722 9.47324 1.94643 8.95536C1.95658 8.41765 2.06843 7.88746 2.27545 7.39507C2.4827 6.9021 2.78116 6.45691 3.15341 6.08471C3.52564 5.71253 3.96434 5.42064 4.44425 5.22531C4.92413 5.02999 5.43607 4.93497 5.95089 4.94541H5.95487C6.60634 4.94541 7.22934 5.24412 7.79479 5.69018C8.35921 6.13543 8.85018 6.71501 9.2331 7.24561C9.41968 7.50416 9.70799 7.64763 10.0189 7.64792C10.1731 7.64929 10.3252 7.61364 10.4632 7.54414C10.6016 7.47451 10.7218 7.37299 10.8149 7.24809L10.8174 7.24464C11.196 6.71319 11.6747 6.13389 12.2278 5.68902C12.7816 5.24362 13.3942 4.94545 14.0451 4.94545L14.0491 4.94537C14.5639 4.93493 15.0758 5.02999 15.5557 5.22531C16.0356 5.42064 16.4743 5.71253 16.8465 6.08471C17.2188 6.45691 17.5172 6.9021 17.7245 7.39507C17.9315 7.88749 18.0434 8.4177 18.0535 8.95543Z" fill="#1D1D1B" />

        {hasNotifications && <circle cx="19" cy="5" r="4.5" fill="#DA3832" stroke="white" strokeWidth="3" />}
    </svg>

})