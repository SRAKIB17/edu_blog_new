import React from 'react';

const MiceVoiceSpeakerSVG = ({ color = 'currentColor', strokeWidth = '0', strokeColor = 'currentColor', size = '24', ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest} viewBox="0 0 32 32" fill={color}>
            <g>
                <path className="cls-1" d="M16,27A10,10,0,0,1,6,17a1,1,0,0,1,2,0,8,8,0,0,0,16,0,1,1,0,0,1,2,0A10,10,0,0,1,16,27Z" />
                <path className="cls-1" d="M16,31a1,1,0,0,1-1-1V26a1,1,0,0,1,2,0v4A1,1,0,0,1,16,31Z" />
                <path className="cls-1" d="M16,23a6,6,0,0,1-6-6V7A6,6,0,0,1,22,7V17A6,6,0,0,1,16,23ZM16,3a4,4,0,0,0-4,4V17a4,4,0,0,0,8,0V7A4,4,0,0,0,16,3Z" />
            </g>
        </svg>
    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default MiceVoiceSpeakerSVG;

