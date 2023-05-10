import React from 'react';

const UploadFileSVG = ({ color = 'currentColor', strokeWidth = '0', strokeColor = 'currentColor', size = '24', ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest}
            viewBox="0 0 24 24" >
            <path d="M4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m4.41-7.59L11 7.83V16h2V7.83l2.59 2.59L17 9l-5-5-5 5 1.41 1.41z">
            </path>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default UploadFileSVG;

