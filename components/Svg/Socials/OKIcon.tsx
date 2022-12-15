import React from 'react'
import SvgInterface from '../../interfaces/SvgInterface';

export default React.memo(({ width, height, color, ...other }: SvgInterface) => {
    return <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.4218 15.4144C3.74733 15.2397 2.23754 14.8273 0.944925 13.8164C0.784536 13.6906 0.618943 13.5693 0.472579 13.4288C-0.093195 12.8855 -0.150202 12.2631 0.297486 11.6218C0.680475 11.073 1.32339 10.9262 1.99164 11.2413C2.12104 11.3024 2.24433 11.3786 2.36242 11.4605C4.77142 13.1158 8.08079 13.1614 10.4988 11.5349C10.7384 11.3512 10.9945 11.2015 11.2913 11.125C11.8684 10.9768 12.4066 11.1888 12.7162 11.6937C13.0701 12.2704 13.0655 12.8332 12.6296 13.2809C11.9609 13.9672 11.1567 14.4638 10.2631 14.8104C9.41819 15.1379 8.49273 15.3028 7.57677 15.4123C7.71499 15.5628 7.78014 15.6367 7.86656 15.7236C9.11031 16.9732 10.3595 18.2177 11.5992 19.4712C12.0215 19.8983 12.1098 20.4278 11.8772 20.9246C11.6229 21.4675 11.0538 21.8247 10.4957 21.7865C10.1421 21.7621 9.86633 21.5861 9.62134 21.3393C8.68276 20.3948 7.72653 19.4678 6.80695 18.5054C6.53933 18.2256 6.41061 18.2785 6.17444 18.5215C5.2302 19.4935 4.27058 20.4507 3.3053 21.4024C2.87186 21.8297 2.35608 21.9066 1.85342 21.6625C1.31909 21.4035 0.979084 20.8581 1.00533 20.31C1.02342 19.9392 1.20576 19.656 1.46025 19.4019C2.69111 18.1729 3.91858 16.9407 5.1465 15.7096C5.22771 15.6277 5.30349 15.5408 5.4218 15.4144Z" fill="white" />
        <path d="M6.44183 11.1332C3.4546 11.123 1.0051 8.64656 1.02252 5.65459C1.03971 2.62959 3.4908 0.191847 6.50743 0.200217C9.53017 0.208361 11.9564 2.68116 11.9412 5.73761C11.9258 8.72348 9.45937 11.1436 6.44183 11.1332ZM9.15668 5.66183C9.15148 4.17625 7.96835 2.99357 6.48571 2.99221C4.99063 2.99063 3.79687 4.1948 3.80841 5.69395C3.81949 7.17388 5.0128 8.34818 6.49951 8.34275C7.9817 8.33755 9.16166 7.14718 9.15668 5.66183Z" fill="white" />
    </svg>




})