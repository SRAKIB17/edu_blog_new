import Footer from '@/src/components/shared/Footer'
import './globals.css'
import './user.css'
// import './messages/[user_name]/global.css'
import '../src/styles/modal.css'

import Navbar from '@/src/components/shared/Navbar/Navbar'


// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {/* <ThemeProvider> */}
        {children}
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  )
}
