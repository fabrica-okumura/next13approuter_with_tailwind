"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Logo() {
  const isHomePage = usePathname() === "/"
  const Tag = isHomePage ? "h1" : "div"

  return (
    <Tag>
      <Link href="/">
        <Image
          src="/img/common/logo.svg"
          alt="ダミーカンパニー"
          width="160"
          height="20"
          className="lg:w-[240px] lg:h-[30px]"
        />
      </Link>
    </Tag>
  )
}