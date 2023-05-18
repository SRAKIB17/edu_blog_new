import NavbarMessages from '@/src/components/messages/NavbarMessages'
import '../globals.css'
import '../user.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='h-screen '>
        <NavbarMessages />

        {/* <ThemeProvider> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
