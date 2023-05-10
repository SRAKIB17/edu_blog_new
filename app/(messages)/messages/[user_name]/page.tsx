/* eslint-disable @next/next/no-img-element */
import SettingsSVG from '@/src/components/SVG/SettingsSVG'
import UserNotFound from '@/src/components/shared/NotFound/UserNotFound'

import MessagesBody from '@/src/components/messages/messagesBody/MessagesBody'
import MessagesUserList from '@/src/components/messages/messagesUserList/MessagesUserList'



export default async function Profile(context: { params: { user_name: string } }) {
    const user_name = context.params
    const check_user_name = (user_name?.user_name)?.[0] == '~'

    return (
        <main className='flex flex-col gap-2 md:grid grid-cols-12 sm:gap-4  h-full ' >
            {
                check_user_name ?
                    <>
                        <section className='col-start-1 lg:col-start-2 col-end-5 bg-white h-full'>
                            <MessagesUserList />
                        </section>
                        <section className='col-start-5 col-end-13 lg:col-end-12 bg-white h-full '>
                            <MessagesBody />
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