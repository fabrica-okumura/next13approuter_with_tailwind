import Image from "next/image"
import type { Metadata } from "next"
import GlobalNavi from "../parts/__GlobalNavi"
import { Navigation } from "../parts/__Navigation"

// import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "about",
  description: "このサイトの概要について",
}


// type ChildOneProps = {
//   setData: (data: string) => void;
// };

export default function Page() {

  return (
    <>
      {/* <Navigation /> */}
      <GlobalNavi />
      <p>aboutページです。このサイトの概要について</p>
      <p>
      一般的には、react.contextコンテクストや状態管理ライブラリ（Redux, MobXなど）を使用するのが最も一般的で推奨される方法です。
      React の状態管理ライブラリ9選
https://zenn.dev/kazukix/articles/react-state-management-libraries
小規模または短期間で完成させるプロジェクト、または状態管理がそれほど複雑でない場合には、Reactの組み込み機能（useState, useReducer, Context API など）だけで十分な場合もあります。
      </p>
    </>
  )
}
