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
                    <button onClick={() => sideBarMenuShowHandle()}>
                        534
                    </button>

                    <a href="#_" className="flex items-center font-medium text-primary lg:w-auto lg:items-center justify-center">
                        <span className="mx-auto text-xl font-black leading-none text-primary select-none">
                            AI
                            <span className="text-indigo-600">.</span>
                        </span>
                    </a>

                    <nav className="hidden lg:flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 ">
                        <a href="#_" className="mr-5 font-medium leading-6 hover:underline">Home</a>
                        <a href="#_" className="mr-5 font-medium leading-6 hover:underline">Features</a>
                        <a href="#_" className="mr-5 font-medium leading-6 hover:underline">Pricing</a>
                        <a href="#_" className="mr-5 font-medium leading-6 hover:underline">Blog</a>
                    </nav>
                </div>
                <div>
                    <button>
                        f
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