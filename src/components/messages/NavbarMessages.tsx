"use client"
import React, { useEffect, useRef } from 'react';
import Loading from '../loading/Loading';
import MenuBarSVG from '../SVG/MenuBarSVG';
import MessagesUserList from './messagesUserList/MessagesUserList';
import SideProfileMenu from '../shared/Navbar/SideProfileMenu';

const NavbarMessages = () => {
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
    const sidebarMenuRef: any = useRef({ style: { left: '100px' } })
    const sideBarMenuShowHandle = () => {
        sidebarMenuRef.current.style.left = '0px'
    }
    const sideBarMenuCloseHandle = () => {
        sidebarMenuRef.current.style.left = '-1000px'
    }
    return (
        <section className="w-full transition-colors sticky -top-0 border-b bg-white" id='header' style={{ zIndex: 100000 }}>
            <div className="px-8  container flex items-center justify-between py-4 sm:py-5 mx-auto md:flex-row ">
                <div className="relative flex items-center justify-between">
                    <button
                        className='px-1 block lg:hidden'
                        onClick={() => sideBarMenuShowHandle()}
                    >
                        <MenuBarSVG />
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
            {/* <SideProfileMenu /> */}
            <div className='box_shadow w-full max-w-[400px] h-full fixed bg-white -left-[1000px] top-0 transition-[2ms] border-r box_shadow z-10 block lg:hidden' ref={sidebarMenuRef}>
                <div className=' absolute z-10 right-0'>
                    <button
                        onClick={() => sideBarMenuCloseHandle()}
                        className='p-4 font-bold text-xl link '
                    >
                        X
                    </button>
                </div>
                <MessagesUserList />
            </div>
            {/* <SideBarMenu sidebarMenuRef={sidebarMenuRef} /> */}
            <Loading />
        </section>

    );
};

export default NavbarMessages;