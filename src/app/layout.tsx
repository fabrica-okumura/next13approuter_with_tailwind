import "./globals.css"
import type { Metadata } from "next"
import PageHeader from "./parts/layout/header/PageHeader"
import PageFooter from "./parts/layout/footer/PageFooter"
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "ダミーカンパニー",
  description: "ダミーカンパニーのWebサイトへようこそ。",
}

// type RootLayoutProps = {
//   title: string;
//   children: React.ReactNode;
// };

// export default function RootLayout({ title, children }: RootLayoutProps) {
//   return (
//     <html lang="ja" className="scroll-smooth scroll-pt-[80px] lg:scroll-pt-[120px]">
//       <body className="lg:text-lg lg:leading-[1]">
//         <div className="overflow-x-hidden__">
//           <PageHeader title={title} />
//           <main className="mb-9 lg:mb-16">{children}</main>
//           <PageFooter />
//         </div>
//       </body>
//     </html>
//   )
// }

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
      <body className="lg:text-lg lg:leading-[1]">
        <div className="overflow-x-hidden__">
          <PageHeader />
          <div className="mb-9 lg:mb-16">{children}</div>
          <PageFooter />
        </div>
      </body>
    </html>
  )
}
