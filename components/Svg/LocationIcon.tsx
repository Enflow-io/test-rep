import React from 'react'
import SvgInterface from '../../interfaces/SvgInterface';

export default React.memo(function AutoIcon({ width, height, color, ...other }: SvgInterface) {
    return <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.5794 4.52022C5.86727 4.52022 4.48127 5.91955 4.48127 7.64439C4.48127 9.36855 5.8675 10.7676 7.5794 10.7676C9.29067 10.7676 10.6766 9.36831 10.6766 7.64439C10.6766 5.91979 9.2909 4.52022 7.5794 4.52022ZM6.19535 7.64439C6.19535 6.87178 6.8156 6.24742 7.5794 6.24742C8.3421 6.24742 8.96254 6.87155 8.96254 7.64439C8.96254 8.4161 8.34232 9.04044 7.5794 9.04044C6.81538 9.04044 6.19535 8.41586 6.19535 7.64439Z" fill="#3B85F7" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.57851 0C3.38475 0 0 3.45619 0 7.70115C0 10.4282 1.57753 12.9876 3.17389 14.8006C3.98479 15.7216 4.83504 16.4897 5.56511 17.0344C5.92919 17.3061 6.2763 17.5319 6.58416 17.6941C6.85085 17.8346 7.21841 18 7.57851 18C7.93859 18 8.30616 17.8346 8.57287 17.6941C8.88075 17.5319 9.22788 17.3061 9.59201 17.0345C10.3222 16.4897 11.1725 15.7216 11.9835 14.8007C13.5801 12.9877 15.1579 10.4283 15.1579 7.70115C15.1579 3.45604 11.7721 0 7.57851 0ZM8.57205 15.6463C8.2556 15.8824 7.98525 16.0547 7.77865 16.1635C7.68679 16.2119 7.62116 16.2404 7.57852 16.257C7.53589 16.2404 7.47028 16.2119 7.37844 16.1635C7.17187 16.0547 6.90155 15.8824 6.58515 15.6464C5.95424 15.1756 5.19126 14.4893 4.45606 13.6543C2.96026 11.9555 1.71409 9.79727 1.71409 7.70115C1.71409 4.39445 4.34687 1.7272 7.57851 1.7272C10.8103 1.7272 13.4438 4.3946 13.4438 7.70115C13.4438 9.79722 12.1975 11.9555 10.7014 13.6543C9.96614 14.4892 9.20304 15.1756 8.57205 15.6463Z" fill="#3B85F7" />
    </svg>

})