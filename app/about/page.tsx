import Image from "next/image"
import type { Metadata } from "next"
import PageTitle from "parts/PageTitle"
import PageSummary from "parts/PageSummary"
import WidthContainer from "parts/WidthContainer"


// import { Navigation } from "../parts/__Navigation"

// import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "当社について",
  description: "当社についての説明ページです。",
}


export default function Page() {
  return (
    <>
    <PageTitle>当社について</PageTitle>
    <WidthContainer>
    <PageSummary>aboutページです。このサイトの概要についてこのサイトの概要についてこのサイトの概要についてこのサイトの概要についてこのサイトの概要についてこのサイトの概要について</PageSummary>
    </WidthContainer>
      {/* <GlobalNavi /> */}


    </>
  )
}
