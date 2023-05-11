import React from 'react';
const test = [
    {
        html: 'Test 01',
        svg: 45345,
        url: 5345,
    },
    {
        html: 'Test 01',
        svg: 45345,
        url: 5345,
    },
    {
        html: 'Test 01',
        svg: 45345,
        url: 5345,
    },
    {
        html: 'Test 01',
        svg: 45345,
        url: 5345,
    },
]
const SideBarMenu = ({ sidebarMenuRef }: { sidebarMenuRef: React.MutableRefObject<any> }) => {
    const sideBarMenuCloseHandle = () => {
        sidebarMenuRef.current.style.left = '-1000px'
    }
    return (
        <div className='box_shadow w-full max-w-[304px] h-full fixed bg-white -left-[1000px] top-0 transition-[2ms] border-r box_shadow z-10 ' ref={sidebarMenuRef}>
            <div className='w-full text-right'>
                <button
                    onClick={() => sideBarMenuCloseHandle()}
                    className='p-4 font-bold text-xl link '
                >
                    X
                </button>
            </div>
            <div className='overflow-auto h-full pt- pr-4'>
                <div className='flex flex-col gap-4'>
                    {
                        test?.map((_sideNav, index) => {
                            return (
                                <button key={index} className='bg-primary text-left btn'>
                                    {
                                        _sideNav?.html
                                    }
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SideBarMenu;