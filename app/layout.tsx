import "globals.css"
import type { Metadata } from "next"
import PageHeader from "layout/header/PageHeader"
import PageFooter from "layout/footer/PageFooter"
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "ダミーカンパニー",
  description: "ダミーカンパニーのWebサイトへようこそ。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className="scroll-smooth scroll-pt-[80px] lg:scroll-pt-[120px]"
    >
      <body className="lg:text-lg __leading-[1]">
        <div className="overflow-x-hidden">
          <PageHeader />
          <div className="mb-9 lg:mb-16">{children}</div>
          <PageFooter />
        </div>
      </body>
    </html>
  )
}
