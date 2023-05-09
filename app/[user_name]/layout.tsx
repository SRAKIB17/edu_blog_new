import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { user_name: string } }): Promise<Metadata> {
  return {
    title: `${params?.user_name?.slice(1)}`
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

