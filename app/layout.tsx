import Footer from '@/src/components/shared/Footer'
import './globals.css'
import '../src/styles/modal.css'

import Navbar from '@/src/components/shared/Navbar/Navbar'
import ThemeProvider from './providers'
import Loading from '@/src/components/loading/Loading'



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
        <Loading />
        {/* <ThemeProvider> */}
        {children}
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  )
}
