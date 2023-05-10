import React from 'react';

const CloudDownloadSVG = ({ color = 'currentColor', strokeWidth = '2', strokeColor = 'currentColor', size = '36', ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest} viewBox="0 0 24 24" fill="none">
            <path d="M8 17l4 4 4-4M12 12v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29">
            </path>
        </svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default CloudDownloadSVG;

