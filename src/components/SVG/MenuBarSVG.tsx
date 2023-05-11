import React from 'react';

const MenuBarSVG = ({ color = '#5F6368', strokeWidth = '0', strokeColor = 'currentColor', size = '24', ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest} viewBox="0 0 25 25" fill="none" >
            <path d="M3.1604 18.1807H21.1604V16.1807H3.1604V18.1807ZM3.1604 13.1807H21.1604V11.1807H3.1604V13.1807ZM3.1604 6.18066V8.18066H21.1604V6.18066H3.1604Z" fill={color} />
        </svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default MenuBarSVG;

