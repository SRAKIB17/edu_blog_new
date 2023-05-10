import React from 'react';

const DocsSVG = ({ color = 'currentColor', strokeWidth = '1.5', strokeColor = 'currentColor', size = '32', ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest} viewBox="0 0 24 24" fill="none" >
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"></path></svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default DocsSVG;

