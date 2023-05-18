/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ClockSVG from '@/src/components/SVG/ClockSVG'
import DocsSVG from '@/src/components/SVG/DocsSVG'
import DeleteSVG from '@/src/components/SVG/DeleteSVG'
import CloudDownloadSVG from '@/src/components/SVG/CloudDownloadSVG'

import MessagesBodyTextarea from './MessagesBodyTextarea';
import SettingsSVG from '../../SVG/SettingsSVG';

const MessagesBody = () => {
    return (
        <>
            <div className=' border-b border-color flex items-center justify-between sm:px-4'>
                <div className='p-3 flex items-center gap-1'>

                    <img src={`/api/~rakib/avatar`} alt="" className="members-user " />

                    <h2 className="user-full-name">
                        Natalie Smith
                    </h2>
                </div>
                <div className='pr-2 sm:pr-0'>
                    <button className='buttonSvg'>
                        <SettingsSVG />
                    </button>
                </div>
            </div>
            <div className=' flex flex-col justify-between msg_body' >
                <div className='sm:px-6 p-2 overflow-auto '  >
                    <div>
                        <div className='flex items-center'>
                            <div>
                                <input type="checkbox" name="msg" id="message" className="checkbox-choice" />
                                <label htmlFor="message"></label>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="user-full-name">
                                    Natalie Smith
                                </h2>
                                <div className="msg-date flex items-center gap-1">
                                    <span>
                                        <ClockSVG size='14' />
                                    </span>
                                    <span>
                                        10 min ago
                                    </span>
                                    <div className='pl-1 flex'>
                                        <span>
                                            <input type="checkbox" name="msg" id="sfd" className="message-seen-handle-checkbox" disabled={true} />
                                            <label htmlFor="sfd"></label>
                                        </span>
                                        <span>
                                            <img src={`/api/~rakib/avatar`} alt="" className="h-4 w-4 rounded-full border border-primary object-cover" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id='testMessages' className='pl-10 sm:pl-12 pt-1'>
                            <div className=' pt-1 border-t'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae sint odit, fugiat dolorum eligendi cum voluptate ut suscipit quaerat modi. Aperiam ratione natus iusto. Dolore dicta facilis quod voluptatem!
                            </div>

                            <div>
                                <div className='flex items-center gap-4 py-4 docs_message' >
                                    <div className=" flex items-center gap-1">
                                        <DocsSVG />
                                        <div className="font-medium">Article.docx</div>
                                    </div>
                                    <div className='flex gap-2 download-delete-docs'>
                                        <button className='buttonSvg'>
                                            <DeleteSVG />
                                        </button>
                                        <button className='buttonSvg'>
                                            <CloudDownloadSVG />
                                        </button>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='relative border-t border-color'>
                    <div className=' w-full -bottom-16 absolute'>
                        <MessagesBodyTextarea />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessagesBody;