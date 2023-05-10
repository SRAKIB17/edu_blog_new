import React from 'react';

const MessagesUserList = () => {
    return (
        <div>
            <div className=" p-[10px] border-b border-color">
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>

            <div className='overflow-auto msg_body'>
                <div className="msg selected-bg anim-y">
                    <input type="checkbox" name="msg" id="message3" className="checkbox-choice" />
                    <label htmlFor="message3"></label>

                    <div className='flex items-center justify-between w-full'>
                        <div className="flex flex-col">
                            <button>
                                <h2 className="user-full-name">
                                    Natalie Smith
                                </h2>
                            </button>
                            <span className="msg-date">
                                10 min ago
                            </span>
                        </div>
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80"
                            alt="" className="members-user " />
                    </div>
                </div>

            </div>
            <div className='relative border-t border-color'>
                <div className=' w-full -bottom-16 md:absolute'>
                </div>
            </div>
        </div>
    );
};

export default MessagesUserList;