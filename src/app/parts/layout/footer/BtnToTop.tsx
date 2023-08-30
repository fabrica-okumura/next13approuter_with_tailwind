"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function BtnToTop() {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY
      if (scrollTop < 2000 || scrollTop > lastScrollTop + 50) {
        setIsShow(false)
      } else if (scrollTop < lastScrollTop - 50) {
        setIsShow(true)
      }
      setLastScrollTop(scrollTop)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollTop])

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <a
      href="#top"
      onClick={handleClick}
      className={`fixed flex justify-center items-center right-5 bg-white w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full lg:hover:opacity-60 duration-300 ease-out ${
        isShow ? "bottom-10" : "bottom-[-100px]"
      }`}
    >
      <Image
        src="/img/common/icon_arrow_blue.svg"
        alt="ページトップへ"
        width={20}
        height={20}
        className="rotate-[-90deg] lg:w-[24px] lg:h-[24px]"
      />
    </a>
  )
}
