"use client"
'use client '
import Loading from '@/src/components/loading/Loading'


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

export default function Home5() {

    return (
        <main>

            {
                post?.map((_p, index) => {
                    return (
                        <div key={index} className='border border-[#DADCE0]m bg-white  overflow-hidden pt-0  rounded-lg'>
                            <Loading />
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
                                    src='https://prog-learn.vercel.app/'
                                    onLoad={(event: any) => {
                                        event.target.style.height = event.target.contentWindow.document.documentElement.scrollHeight + 'px';

                                    }}
                                    className='
                '>

                                </iframe>
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}
