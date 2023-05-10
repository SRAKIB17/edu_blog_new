/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useRef } from 'react';
import Youtube from '../../Svg/Youtube'
import UploadFile from '../../Svg/UploadFile'
import LinkAdd from '../../Svg/LinkAdd'

const NewPost = () => {
    const newPostRef = useRef<HTMLDivElement | any>()

    function showModalHandle() {
        newPostRef.current.style.height = '250px'
        newPostRef.current.style.position = 'relative'
    }
    function closeNewPost() {
        newPostRef.current.style.height = '0px'
        setTimeout(() => {
            newPostRef.current.style.position = 'absolute'
        }, 200);
    }

    const heightAutoHandle = (e: any) => {
        if (window.innerWidth > 768) {
            if (e.target.scrollHeight > 150) {
                e.target.style.height = e.target.scrollHeight + 'px'
                newPostRef.current.style.height = (e.target.scrollHeight + 100) + 'px'
            }
            else {
                e.target.style.height = 150 + 'px'
                newPostRef.current.style.height = '250px'
            }
        }
        else {
            e.target.style.height = 150 + 'px'
            newPostRef.current.style.position = 'relative'
            newPostRef.current.style.height = '250px'
        }
    }
    useEffect(() => {
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks the button, open the modal 

        // When the user clicks on <span> (x), close the modal




        // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function (event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // }
        return () => {
        }
    }, [])

    return (
        <div className='border border-[#DADCE0] box_shadow bg-white  overflow-hidden pt-0  rounded-lg mb-2 sm:mb-4' >

            <div className='py-2 px-4  relative'>
                <div className='flex items-center gap-2 w-full'>
                    <div>
                        <img src="https://lh3.googleusercontent.com/a/AGNmyxZHfbSF2kVkLgQgx3MUxcXfDlMe27HK8JB9dm1V4A=s40-c" alt="avater" className='w-10 h-10 rounded-full' />
                    </div>
                    <div className='w-full'>
                        <button
                            onClick={() => showModalHandle()}
                            className='text-left opacity-90 font-medium text-[16px] w-full'
                        >
                            Write something
                        </button>
                    </div>
                </div>

                <div ref={newPostRef} className='h-0  rounded-t-lg  fixed bottom-0 md:absolute  w-full bg-white left-0 z-[1000] overflow-hidden transition-[2ms]'>
                    <div className='p-2'>
                        <div className=' py-2 pb-4'
                        // style={{ height: 'calc(100% - 100px)' }}
                        >
                            <textarea
                                className='border-b-2 h-[150px] bg-gray-200  outline-none focus:border-gray-400 w-full block'
                                style={{ height: '150px' }}
                                // onBlur={onchangeInput}
                                // onKeyUp={(e) => shortcutKeyboard(e)}
                                // onChange={onchangeInput}
                                // onInput={onchangeInput}
                                onCut={heightAutoHandle}
                                onPaste={heightAutoHandle}
                                onDrop={heightAutoHandle}
                                onKeyDown={heightAutoHandle}
                            // required={selectEmoji ? false : true}
                            >
                            </textarea>
                        </div>

                        <div className='w-full text-right relative bottom-0 flex gap-4 p-2 flex-col md:flex-row md:items-center md:justify-between'>
                            <div className='flex gap-4'>
                                <button className='p-2 hover:bg-gray-200 border rounded-full' data-title="Add link">
                                    <LinkAdd />
                                </button>
                                <button className='p-2 hover:bg-gray-200 border rounded-full' data-title="Upload file">
                                    <UploadFile />
                                </button>
                                <button className='p-2 hover:bg-gray-200 border rounded-full' data-title="Add youtube video">
                                    <Youtube />
                                </button>
                            </div>
                            <div className='flex gap-2'>
                                <button onClick={closeNewPost} className=" border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 test rounded text-lg">
                                    Cancel
                                </button>
                                <button className=" text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div>

                {/* <div className="modal" ref={newPostRef}>

                    <div className="modal-content">
                        <div className="modal-header">

                            <span className="close" onClick={closeModalHandle}>
                                &times;
                            </span>
                            <h2>Modal Header</h2>

                        </div>
                        <div className="modal-body">

                            <p>Some text in the Modal Body</p>
                            <p>Some other text...</p>

                        </div>
                        <div className="modal-footer">

                            <h3>Modal Footer</h3>

                        </div>
                    </div>

                </div> */}
            </div>
        </div >
    );
};

export default NewPost;