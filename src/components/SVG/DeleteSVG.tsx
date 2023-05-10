import React from 'react';

const DeleteSVG = ({ color = 'currentColor', strokeWidth = '2', strokeColor = 'currentColor', size = '36', ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest} viewBox="0 0 24 24" fill="none" className="feather feather-trash-2">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"></path></svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default DeleteSVG;

