'use client'
import React, { useRef, useState } from 'react';
import AttachmentSVG from '@/src/components/SVG/AttachmentSVG'
import MiceVoiceSpeakerSVG from '@/src/components/SVG/MiceVoiceSpeakerSVG'
import Loading from '@/src/components/loading/Loading'
import AudioRecord from '@/src/components/messages/messagesBody/AudioRecord'

const MessagesBodyTextarea = () => {

    const recordButtonHandleRef = useRef<any>()
    return (
        <div>
            <div className="flex items-end relative">

                <AudioRecord
                    recordButtonHandleRef={recordButtonHandleRef}
                />

                {/* <p id="myP" onmousedown="mouseDown()" onmouseup="mouseUp()"> */}

                <button
                    className=' p-4 sm:p-5  h-14 bg-gray-200 text-gray-500 hover:bg-gray-300' data-title='Tap to record'
                    ref={recordButtonHandleRef}
                // onMouseDown={() => {
                //     setStartRecord(true)
                //     setStopRecord(false)
                // }}
                // onMouseUp={() => {
                //     setStartRecord(false)
                //     setStopRecord(true)
                // }}

                >
                    <MiceVoiceSpeakerSVG />
                </button>
                <textarea
                    placeholder="Write something..."
                    className='h-14 bg-gray-200 p-1 py-4 resize-none outline-none focus:border-gray-400 w-full block'
                />
                <div className="flex items-center  ">
                    <button className=' p-4 sm:p-5  h-14 bg-gray-200 text-gray-500 hover:bg-gray-300' data-title='Attach file'>
                        <AttachmentSVG size='18' />
                    </button>
                    <button className='bg-primary p-4 sm:p-5 h-14'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-send">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessagesBodyTextarea;