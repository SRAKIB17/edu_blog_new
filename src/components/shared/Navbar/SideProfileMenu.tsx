/* eslint-disable @next/next/no-img-element */
import React from 'react';

const SideProfileMenu = () => {
    return (
        <div className='box_shadow p-10 w-fit rounded-lg fixed bg-white right-2 top-16 sm:top-[74px]'>
            <div className='flex items-center gap-4'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="170" height="200">
                    <defs>
                        <filter id="filter">
                            <feGaussianBlur stdDeviation="5" />
                        </filter>
                        <mask id="mask">
                            <ellipse cx="50%" cy="50%" rx="25%" ry="25%" fill="white" filter="url(#filter)"></ellipse>
                        </mask>
                    </defs>

                    <image href="https://lh3.googleusercontent.com/a/AGNmyxZHfbSF2kVkLgQgx3MUxcXfDlMe27HK8JB9dm1V4A=s83-c-mo" width="64" height="64" mask="url(#path-1-inside-1_824_12075)">
                    </image>
                </svg> */}
                <div className='relative w-fit'>
                    {/* <img alt="Profile image"
                        mask="url(#path-1-inside-1_824_12075)"
                        srcSet=" https://lh3.googleusercontent.com/a/AGNmyxZHfbSF2kVkLgQgx3MUxcXfDlMe27HK8JB9dm1V4A=s83-c-mo 1x, https://lh3.googleusercontent.com/a/AGNmyxZHfbSF2kVkLgQgx3MUxcXfDlMe27HK8JB9dm1V4A=s192-c-mo 2x" /> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64" fill="none"
                    >
                        <mask id="path-1-inside-1_824_12075" fill="white"
                        >
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M62.5796 41.4569C63.5029 38.468 64 35.2921 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C35.2921 64 38.468 63.5029 41.4569 62.5796C39.2981 59.9812 38 56.6422 38 53C38 44.7157 44.7157 38 53 38C56.6422 38 59.9812 39.2981 62.5796 41.4569Z">
                            </path>
                        </mask>
                        <path
                            d="M62.5796 41.4569L61.9406 42.2261L63.0929 43.1835L63.5351 41.7521L62.5796 41.4569ZM41.4569 62.5796L41.7521 63.5351L43.1835 63.0929L42.2261 61.9406L41.4569 62.5796ZM63 32C63 35.1909 62.5182 38.2674 61.6241 41.1618L63.5351 41.7521C64.4875 38.6687 65 35.3933 65 32H63ZM32 1C49.1208 1 63 14.8792 63 32H65C65 13.7746 50.2254 -1 32 -1V1ZM1 32C1 14.8792 14.8792 1 32 1V-1C13.7746 -1 -1 13.7746 -1 32H1ZM32 63C14.8792 63 1 49.1208 1 32H-1C-1 50.2254 13.7746 65 32 65V63ZM41.1618 61.6241C38.2674 62.5182 35.1909 63 32 63V65C35.3933 65 38.6687 64.4875 41.7521 63.5351L41.1618 61.6241ZM42.2261 61.9406C40.2109 59.515 39 56.4003 39 53H37C37 56.8841 38.3853 60.4474 40.6877 63.2186L42.2261 61.9406ZM39 53C39 45.268 45.268 39 53 39V37C44.1634 37 37 44.1634 37 53H39ZM53 39C56.4003 39 59.515 40.2109 61.9406 42.2261L63.2186 40.6877C60.4474 38.3853 56.8841 37 53 37V39Z"
                            fill="currentColor" mask="url(#path-1-inside-1_824_12075)">
                        </path>
                        <image href="https://lh3.googleusercontent.com/a/AGNmyxZHfbSF2kVkLgQgx3MUxcXfDlMe27HK8JB9dm1V4A=s83-c-mo" width="64" height="64" mask="url(#path-1-inside-1_824_12075)">
                        </image>
                    </svg>

                    <div className='absolute -bottom-[5px] z-50 -right-[5px]'>
                        <button className='border-2 rounded-full p-1'>
                            <svg width="18" height="18"
                                viewBox="0 0 24 24" fill='currentColor'>
                                <path
                                    d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h16v12z">
                                </path>
                                <path d="M12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <div className='text-sm'>MD RAKIBUL ISLAM</div>
                    <div className='text-xs'>rakibulssc5@gmail.com</div>
                </div>
            </div>
            <div className='pt-4'>
                <span>
                    <a target="_blank"
                        className='border px-4 py-2 rounded-md'
                        href="https://myaccount.google.com/?hl=en&amp;authuser=0&amp;utm_source=OGB&amp;utm_medium=act">
                        Manage your Google Account</a>
                </span>
            </div>
        </div>
    );
};

export default SideProfileMenu;