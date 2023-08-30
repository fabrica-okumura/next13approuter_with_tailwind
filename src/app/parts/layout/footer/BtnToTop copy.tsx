"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function BtnToTop() {
  // スクロール位置を追跡するためのローカルステート
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isShow, setIsShow] = useState(false)

  // スクロールイベントリスナーをセットアップするためのuseEffectフック
  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY
      if (scrollTop < 2000 || scrollTop > lastScrollTop + 50) {
        // Downward scroll or less than 2000px
        setIsShow(false)
      } else if (scrollTop < lastScrollTop - 50) {
        // Upward scroll
        setIsShow(true)
      }
      setLastScrollTop(scrollTop)
    }

    // イベントリスナーを追加
    window.addEventListener("scroll", handleScroll)

    // コンポーネントのクリーンアップ時にイベントリスナーを削除
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollTop])

  return (
    <a
      href="#top"
      className={`fixed flex justify-center items-center bottom-10 right-5 bg-white w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full lg:hover:opacity-60 duration-300 ease-out ${
        isShow ? "is-show" : ""
      }`}
    >
      <Image
        src="/img/common/icon_arrow_blue.svg"
        alt="ページトップへ"
        width="20"
        height="20"
        className="rotate-[-90deg] lg:w-[24px] lg:h-[24px]"
      />
    </a>
  )
}

// import Image from "next/image"

// export default function BtnToTop() {
//   return (
//     <a
//       href="#top"
//       className="fixed flex justify-center items-center bottom-10 right-5 bg-white w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full lg:hover:opacity-60 duration-300 ease-out"
//     >
//       <Image
//         src="/img/common/icon_arrow_blue.svg"
//         alt="ページトップへ"
//         width="20"
//         height="20"
//         className="rotate-[-90deg] lg:w-[24px] lg:h-[24px]"
//       />
//     </a>
//   )
// }
