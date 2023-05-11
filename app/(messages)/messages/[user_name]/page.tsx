/* eslint-disable @next/next/no-img-element */
import SettingsSVG from '@/src/components/SVG/SettingsSVG'
import UserNotFound from '@/src/components/shared/NotFound/UserNotFound'

import MessagesBody from '@/src/components/messages/messagesBody/MessagesBody'
import MessagesUserList from '@/src/components/messages/messagesUserList/MessagesUserList'
import NavbarMessages from '@/src/components/messages/NavbarMessages'



export default async function Profile(context: { params: { user_name: string } }) {
    const user_name = context.params
    const check_user_name = (user_name?.user_name)?.[0] == '~'

    return (
        <main className='flex flex-col gap-2 lg:grid grid-cols-12  h-full ' >
            {
                check_user_name ?
                    <>
                        <section className='col-start-1 col-end-5 xl:col-end-4 bg-white relative z-50 h-full hidden lg:block'>
                            <MessagesUserList />
                        </section>
                        <section className='col-start-5 xl:col-start-4 col-end-13 bg-white h-full '>
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
