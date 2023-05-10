import MessagesSVG from '@/src/components/SVG/MessagesSVG'
import NotificationsSVG from '@/src/components/SVG/NotificationsSVG'
import SettingsSVG from '@/src/components/SVG/SettingsSVG'
import Loading from '@/src/components/loading/Loading'
import NewPost from '@/src/components/shared/NewPost/NewPost'
import UserNotFound from '@/src/components/shared/NotFound/UserNotFound'
import { Metadata } from 'next'


const post = [
    {
        //user_details
        name: "Md Rakibul Isalm",
        avatar: 'https://lh3.googleusercontent.com/a/AGNmyxZHfbSF2kVkLgQgx3MUxcXfDlMe27HK8JB9dm1V4A=s83-c-mo',
        //postDetails
        entry_date: new Date(),
        description: 'বিশেষ ফাইল আপনাকে প্রতিক্রিয়া সাসপেন্সloading.js সহ অর্থপূর্ণ লোডিং UI তৈরি করতে সহায়তা করে. এই কনভেনশনের সাহায্যে, আপনি সার্ভার থেকে একটি তাত্ক্ষণিক লোডিং অবস্থা দেখাতে পারেন যখন একটি রুট সেগমেন্টের বিষয়বস্তু লোড হয়, রেন্ডারিং সম্পূর্ণ হয়ে গেলে নতুন সামগ্রী স্বয়ংক্রিয়ভাবে অদলবদল হয়ে যায়।',
        poll: true,
        // For poll
        poll_details: 345345,
        file: true,
        //have_file
        file_type: 'pdf',
        file_name: 'Test , wow, 4sfsdfsd',
        file_url: '53454, 34534,5345'
        // react _post

    }
]

const menuBtn = [
    {
        html: "Edit Profile"
    },
    {
        html: 'Settings'
    }
]

export default async function Profile(context: { params: { user_name: string } }) {
    const user_name = context.params
    const check_user_name = decodeURIComponent(user_name?.user_name)?.[0] == '@'

    return (
        <main className='px-3 flex flex-col gap-2 md:grid grid-cols-12 sm:gap-4 pt-10' >
            {
                check_user_name ?
                    <>
                        <section className='col-start-1 lg:col-start-2 col-end-5 rounded-lg'>
                            <div className="user-profile-area bg-white">
                                <div className="side-wrapper">
                                    <div className="user-profile">
                                        <img src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png" alt="" className="user-photo" />
                                        <div className=".user-full-name ">
                                            Natalie Smith
                                        </div>
                                        <div className="user-name">
                                            {
                                                decodeURIComponent(user_name?.user_name)
                                            }
                                        </div>
                                    </div>

                                    <div className="user-notification">
                                        <div className="notify ">
                                            <button className='buttonSvg'>
                                                <SettingsSVG />
                                            </button>
                                        </div>
                                        <div className="notify ">
                                            <button className='buttonSvg' data-alert='5'>
                                                <MessagesSVG />
                                            </button>
                                        </div>
                                        <div className="notify ">
                                            <button className='buttonSvg' data-alert='5'>
                                                <NotificationsSVG />
                                            </button>
                                        </div>
                                    </div>
                                    {/* 
                                    <div className="progress-status">12/34</div>
                                    <div className="progress">
                                        <div className="progress-bar"></div>
                                    </div> */}

                                </div>

                                <div className="side-wrapper">
                                    <div className="font-medium">
                                        Friends
                                    </div>
                                    <div className="flex justify-between pt-1">
                                        <img src="https://images.unsplash.com/flagged/photo-1574282893982-ff1675ba4900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="" className="members-user" />
                                        <img src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png" alt="" className="members-user" />
                                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" className="members-user" />
                                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80" alt="" className="members-user" />
                                        <img src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" className="members-user" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='col-start-5 col-end-13 lg:col-end-12 '>
                            <NewPost />
                            {
                                post?.map((_p, index) => {
                                    return (
                                        <div key={index} className='border border-[#DADCE0] bg-white  overflow-hidden pt-0  rounded-lg'>

                                            <div className='flex items-center gap-1 '>
                                                <span>
                                                    <img src={_p?.avatar} alt="" className='rounded-full h-12 w-12 object-contain' />
                                                </span>
                                                <div className='flex flex-col '>
                                                    <span className='font-medium'>
                                                        {
                                                            _p.name
                                                        }
                                                    </span>
                                                    <span className='text-xs'>
                                                        {
                                                            _p?.entry_date?.toDateString()
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <iframe
                                                    // srcDoc={_p.description}
                                                    src='https://prog-learn.vercel.app/'>

                                                </iframe>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </>
                    :
                    <>
                        <section className='col-start-1 lg:col-start-2 col-end-13 lg:col-end-12 py-40'>
                            <UserNotFound />
                        </section>
                    </>
            }
        </main>
    )
}
