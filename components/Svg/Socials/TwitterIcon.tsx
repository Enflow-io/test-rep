import React from 'react'
import SvgInterface from '../../interfaces/SvgInterface';

export default React.memo(({ width, height, color, ...other }: SvgInterface) => {
    return <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clipRule="evenodd" d="M21.8007 2.67857C21.0047 3.02981 20.1508 3.26827 19.2549 3.37461C20.1701 2.8268 20.8726 1.95674 21.2013 0.922341C20.3441 1.43149 19.3967 1.79884 18.3881 1.99863C17.5793 1.13824 16.4289 0.600098 15.1528 0.600098C12.7069 0.600098 10.7219 2.58512 10.7219 5.03094C10.7219 5.37897 10.7606 5.71732 10.8379 6.03957C7.1547 5.85589 3.89037 4.08999 1.70556 1.40893C1.32531 2.06308 1.10619 2.82358 1.10619 3.63563C1.10619 5.17273 1.88924 6.52938 3.07832 7.32209C2.35327 7.29954 1.67011 7.09975 1.07074 6.76784C1.07074 6.78717 1.07074 6.80328 1.07074 6.82262C1.07074 8.96876 2.59817 10.7604 4.62509 11.1665C4.25451 11.2664 3.86137 11.3211 3.45856 11.3211C3.17177 11.3211 2.89464 11.2921 2.62395 11.2406C3.18788 13 4.82488 14.2826 6.76156 14.318C5.24379 15.5071 3.33611 16.216 1.25764 16.216C0.899952 16.216 0.548706 16.1935 0.200684 16.1548C2.15992 17.4115 4.48974 18.1463 6.99357 18.1463C15.1431 18.1463 19.5997 11.3953 19.5997 5.54009C19.5997 5.34674 19.5965 5.15662 19.5868 4.9665C20.4537 4.34134 21.2045 3.56151 21.7974 2.67212L21.8007 2.67857Z" fill="white" />
    </svg>


})