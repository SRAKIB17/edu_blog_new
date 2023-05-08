"use client"
import React, { useEffect, useRef } from 'react';
import SideBarMenu from './SideBarMenu';
import SideProfileMenu from './SideProfileMenu';

const Navbar = () => {
    useEffect(() => {

        window.onscroll = function () { scrolling() };

        const header: HTMLElement | any = document.getElementById("header");
        const sticky = header.offsetTop;

        function scrolling() {
            if (window.pageYOffset > sticky) {
                header.classList.add('box_shadow')
            } else {
                header.classList.remove('box_shadow')
            }
        }

    }, [])
    const sidebarMenuRef = useRef({ style: { left: '100px' } })
    const sideBarMenuShowHandle = () => {
        sidebarMenuRef.current.style.left = '0px'
    }
    return (
        <section className="w-full px-8 transition-colors sticky -top-0 border-b bg-white" id='header' style={{ zIndex: 100000 }}>
            <div className="container flex items-center justify-between py-4 sm:py-5 mx-auto md:flex-row ">
                <div className="relative flex items-center justify-between">
                    <button
                        className='px-1'
                        onClick={() => sideBarMenuShowHandle()}
                    >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.1604 18.1807H21.1604V16.1807H3.1604V18.1807ZM3.1604 13.1807H21.1604V11.1807H3.1604V13.1807ZM3.1604 6.18066V8.18066H21.1604V6.18066H3.1604Z" fill="#5F6368" />
                        </svg>
                    </button>

                </div>
                <nav className="hidden lg:flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8">
                    <a href="#_" className="mr-5 font-medium leading-6 hover:underline">Home</a>
                    <a href="#_" className="mr-5 font-medium leading-6 hover:underline">Features</a>
                    <a href="#_" className="mr-5 font-medium leading-6 hover:underline">Pricing</a>
                    <a href="#_" className="mr-5 font-medium leading-6 hover:underline">Blog</a>
                </nav>

                <div>
                    <button>

                    </button>
                </div>
                {/* <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                    <a href="#" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                        Sign in
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6  whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Sign up
                    </a>
                </div> */}
            </div>
            <SideProfileMenu />
            <SideBarMenu sidebarMenuRef={sidebarMenuRef} />

        </section>

    );
};

export default Navbar;