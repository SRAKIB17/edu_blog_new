import Loading from '@/src/components/loading/Loading'
import NewPost from '@/src/components/shared/NewPost/NewPost'
import Error404 from '@/src/components/shared/NotFound/Error404'
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
    const check_user_name = user_name?.user_name?.[0] == '~'

    return (
        <main className='px-3 flex flex-col gap-2 md:grid grid-cols-12 sm:gap-4' >
            {
                check_user_name ?
                    <>
                        <section className='col-start-1 lg:col-start-2 col-end-13 lg:col-end-12 pt-10 bg-[#C26401] ring-lime-50  rounded-lg h-[180px] lg:h-[240px] w-full '>

                        </section>
                        <section className='col-start-1 lg:col-start-2 col-end-5 bg-white border border-[#DADCE0] rounded-lg'>
                            {
                                menuBtn?.map((_m, index) => {
                                    return (
                                        <button key={index} className=" mt-2 border-0 w-full py-2 px-8  text-lg text-left cursor-progress" >
                                            {
                                                _m?.html
                                            }
                                        </button>
                                    )
                                })
                            }
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
                            <Error404 />
                        </section>
                    </>
            }
        </main>
    )
}
