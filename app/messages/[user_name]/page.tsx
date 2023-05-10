/* eslint-disable @next/next/no-img-element */
import SettingsSVG from '../../../src/components/Svg/SettingsSVG'
import UserNotFound from '../../../src/components/shared/NotFound/UserNotFound'
import ClockSVG from '../../../src/components/SVG/ClockSVG'
import DocsSVG from '../../../src/components/SVG/DocsSVG'
import DeleteSVG from '../../../src/components/SVG/DeleteSVG'
import CloudDownloadSVG from '../../../src/components/SVG/CloudDownloadSVG'
import AttachmentSVG from '../../../src/components/SVG/AttachmentSVG'



export default async function Profile(context: { params: { user_name: string } }) {
    const user_name = context.params
    const check_user_name = decodeURIComponent(user_name?.user_name)?.[0] == '@'

    return (
        <main className='flex flex-col gap-2 md:grid grid-cols-12 sm:gap-4 pt-10' >
            {
                check_user_name ?
                    <>
                        <section className='col-start-1 lg:col-start-2 col-end-5 bg-white '>


                            <div className=" p-[10px] border-b border-color">
                                <div className="search-bar">
                                    <input type="text" placeholder="Search..." />
                                </div>
                            </div>

                            <div>
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
                        </section>
                        <section className='col-start-5 col-end-13 lg:col-end-12 bg-white '>
                            {/* <NewPost /> */}

                            <div className=' border-b border-color flex items-center justify-between sm:px-4'>
                                <div className='p-3 flex items-center gap-1'>
                                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80"
                                        alt="" className="members-user " />
                                    <h2 className="user-full-name">
                                        Natalie Smith
                                    </h2>
                                </div>

                                <div>
                                    <button className='buttonSvg'>
                                        <SettingsSVG />
                                    </button>
                                </div>
                            </div>

                            {/* Message body */}
                            <div className='px-3 sm:px-6 p-2'>
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
                                            <div className='pl-1'>
                                                <input type="checkbox" name="msg" id="sfd" className="message-seen-handle-checkbox" checked disabled={true} />
                                                <label htmlFor="sfd"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='pl-12'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae sint odit, fugiat dolorum eligendi cum voluptate ut suscipit quaerat modi. Aperiam ratione natus iusto. Dolore dicta facilis quod voluptatem!
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

                                    <div>
                                        <div className="flex items-end">
                                            <textarea
                                                placeholder="Write something..."
                                                className='h-10 bg-gray-200 p-1 outline-none focus:border-gray-400 w-full block'
                                            />
                                            <div className="flex items-center  ">
                                                <button className='p-2 bg-gray-200 text-gray-500 hover:bg-gray-300'>
                                                    <AttachmentSVG />
                                                </button>
                                                <button className='bg-primary p-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-send">
                                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                    :
                    <>
                        <section className='col-start-1 lg:col-start-2 col-end-13 lg:col-end-12 py-40'>
                            <UserNotFound />
                        </section>
                    </>
            }
        </main >
    )
}
