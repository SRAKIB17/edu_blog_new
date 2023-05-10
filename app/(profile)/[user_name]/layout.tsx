import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { user_name: string } }): Promise<Metadata> {
  const check_user_name = decodeURIComponent(params?.user_name)?.[0] == '@'

  return {
    title: `${check_user_name ? decodeURIComponent(params?.user_name)?.slice(1) : "Could not find user"}`
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}

