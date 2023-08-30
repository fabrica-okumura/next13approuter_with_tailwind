"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

export default function SpMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const body = document.body
    const windowWidth = window.innerWidth

    // SPメニュー非表示でhidden解除
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

  return (
    <nav className="lg:hidden">
      <button
        onClick={handleToggle}
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
        <ul className="mx-3 my-8 [&>li]:border-b [&>li]:border-gray-100 [&>li>a]:block [&>li>a]:font-bold [&>li>a]:relative [&>li>a]:p-3 [&>li>a::after]:content-[''] [&>li>a::after]:absolute [&>li>a::after]:inset-y-0 [&>li>a::after]:right-3 [&>li>a::after]:left-auto [&>li>a::after]:m-auto [&>li>a::after]:w-[16px] [&>li>a::after]:h-[16px] [&>li>a::after]:bg-[url(/img/common/icon_arrow_gray.svg)] [&>li>a::after]:bg-no-repeat [&>li>a::after]:bg-contain">
          <li>
            <a href="/#sec01" onClick={handleToggle}>
              HomeのSec01
            </a>
          </li>
          <li>
            <Link href="/about" onClick={handleToggle}>
              当社について
            </Link>
          </li>
          <li>
            <Link href="/article" onClick={handleToggle}>
              記事一覧
            </Link>
          </li>
          <li>
            <Link href="/form" onClick={handleToggle}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
