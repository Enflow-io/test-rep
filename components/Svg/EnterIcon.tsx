import React from 'react'
import SvgInterface from '../../interfaces/SvgInterface';

export default React.memo(function AutoIcon({ width, height, color, ...other }: SvgInterface) {
    return <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.50236 4.54313C6.50236 3.06258 7.70188 1.86274 9.18374 1.86274H13.972C15.4478 1.86274 16.6435 3.0585 16.6435 4.53431V15.4559C16.6435 16.9366 15.4429 18.1373 13.9622 18.1373H9.17296C7.69845 18.1373 6.50236 16.9408 6.50236 15.4657V14.5422C6.50236 14.0278 6.08538 13.6108 5.57099 13.6108C5.05661 13.6108 4.63962 14.0278 4.63962 14.5422V15.4657C4.63962 17.969 6.66903 20 9.17296 20H13.9622C16.4716 20 18.5063 17.9654 18.5063 15.4559V4.53431C18.5063 2.02973 16.4765 0 13.972 0H9.18374C6.67346 0 4.63962 2.03348 4.63962 4.54313V5.45783C4.63962 5.97222 5.05661 6.38921 5.57099 6.38921C6.08538 6.38921 6.50236 5.97222 6.50236 5.45783V4.54313Z" fill="#1D1D1B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M10.5232 6.48074C10.1587 6.11777 9.56899 6.11898 9.20602 6.48345C8.84304 6.84792 8.84425 7.43763 9.20872 7.8006L10.4815 9.06814H0.931371C0.416989 9.06814 0 9.48513 0 9.99951C0 10.5139 0.416989 10.9309 0.931371 10.9309H10.4814L9.20872 12.1984C8.84425 12.5613 8.84304 13.1511 9.20602 13.5155C9.56899 13.88 10.1587 13.8812 10.5232 13.5182L13.3938 10.6594C13.5693 10.4846 13.6679 10.2472 13.6679 9.99948C13.6679 9.7518 13.5692 9.51432 13.3938 9.33955L10.5232 6.48074Z" fill="#1D1D1B" />
    </svg>

})