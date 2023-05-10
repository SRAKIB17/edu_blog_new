import React from 'react';

const ClockSVG = ({ color = 'currentColor', strokeWidth = '2', strokeColor = 'currentColor', size = '24', ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest} viewBox="0 0 24 24" fill="none" >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path></svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default ClockSVG;

