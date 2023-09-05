"use client"

import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import PcMenu from "layout/header/PcMenu"

export default function PageHeader() {
  const isHomePage = usePathname() === "/"
  const LogoTag = isHomePage ? "h1" : "div"

  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  const menuHide = () => {
    setOpen(false)
  }

  useEffect(() => {
    const body = document.body
    const windowWidth = window.innerWidth

    // SPメニュー非表示幅でhidden解除
    if (isOpen && windowWidth <= 1024) {
      body.classList.add("overflow-y-hidden", "lg:overflow-y-auto")
    } else {
      body.classList.remove("overflow-y-hidden", "lg:overflow-y-auto")
    }

    // コンポーネントがアンマウントされる際にクラスを削除
    return () => {
      body.classList.remove("overflow-y-hidden", "lg:overflow-y-auto")
    }
  }, [isOpen])

  const spMenuItems = [
    { label: "HomeのSec01", href: "/#sec01", tag: "a" },
    { label: "当社について", href: "/about", tag: "Link" },
    { label: "記事一覧", href: "/article", tag: "Link" },
    { label: "お問い合わせ", href: "/form", tag: "Link" },
  ]

  return (
    <header className="h-[54px] lg:h-[90px]">
      <div className="fixed left-0 top-0 z-50 w-[100%] bg-white shadow-md flex items-center h-[54px] lg:h-[90px]">
        <LogoTag className="mr-auto ml-3 lg:ml-5">
          <Link href="/" onClick={menuHide}>
            <Image
              src="/img/common/logo.svg"
              alt="ダミーカンパニー"
              width="160"
              height="20"
              className="lg:w-[240px] lg:h-[30px]"
            />
          </Link>
        </LogoTag>

        <PcMenu />

        <nav className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="w-[54px] h-[54px] ml-auto relative"
          >
            <span
              className={`${
                isOpen ? "rotate-45 translate-y-0" : "translate-y-[-6px]"
              } block transition-all bg-blue-500 h-[2px] w-[20px] absolute inset-0 m-auto`}
            ></span>
            <span
              className={`${
                isOpen ? "opacity-0 translate-x-2" : "opacity-100"
              } block transition-all bg-blue-500 h-[2px] w-[20px] absolute inset-0 m-auto`}
            ></span>
            <span
              className={`${
                isOpen ? "-rotate-45 translate-y-0" : "translate-y-[6px]"
              } block transition-all bg-blue-500 h-[2px] w-[20px] absolute inset-0 m-auto`}
            ></span>
          </button>

          <div
            className={`${
              isOpen ? "h-full " : "h-0"
            } overflow-hidden fixed left-0 top-[54px] lg:top-[90px] w-full bg-white transition-all`}
          >
            <ul className="mx-3 my-8">
              {spMenuItems.map((item, index) => {
                const Tag = item.tag === "Link" ? Link : "a"
                return (
                  <li key={index} className="border-b border-gray-100">
                    <Tag
                      href={item.href}
                      onClick={toggleMenu}
                      className="block font-bold relative p-3 after:content-[''] after:absolute after:inset-y-0 after:right-3 after:left-auto after:m-auto after:w-[16px] after:h-[16px] after:bg-[url(/img/common/icon_arrow_gray.svg)] after:bg-no-repeat after:bg-contain"
                    >
                      {item.label}
                    </Tag>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>
      {/* end fixed contents */}
    </header>
  )
}
