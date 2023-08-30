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
        className="w-[54px] h-[54px] ml-auto bg-blue-200 relative"
      >
        <span className="block bg-blue-500 h-[2px] w-[20px] absolute inset-0 m-auto translate-y-[-6px]"></span>
        <span
          className={`${
            isOpen ? "hidden" : "block"
          } bg-blue-500 h-[2px] w-[20px] absolute inset-0 m-auto`}
        ></span>
        <span className="block bg-blue-500 h-[2px] w-[20px] absolute inset-0 m-auto translate-y-[6px]"></span>
        {/* {isOpen ? "Close" : "Menu"} */}
      </button>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } fixed left-0 top-[54px] lg:top-[90px] w-full h-full bg-red-50`}
        // style={{ display: isOpen ? "block" : "none" }}
      >
        <li>
          <a
            href="/#sec01"
            className="font-bold transition-colors hover:text-blue-600"
          >
            HomeのSec01リンクタップでisOpen解除。ページ遷移でも。
          </a>
        </li>
        <li>
          <Link
            href="/about"
            className="font-bold transition-colors hover:text-blue-600"
          >
            当社について
          </Link>
        </li>
        <li>
          <Link
            href="/article"
            className="font-bold transition-colors hover:text-blue-600"
          >
            記事一覧
          </Link>
        </li>
        <li>
          <Link
            href="/form"
            className="font-bold transition-colors hover:text-blue-600"
          >
            お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  )
}
