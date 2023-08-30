import Link from "next/link"
import ContainerBox from "../../ContainerBox"
import Logo from "./__Logo"
import PcMenu from "./PcMenu"
import Hamburger from "./__Hamburger"
import SpMenu from "./__SpMenu"

export default function PageHeader() {
  return (
    <header className="h-[54px] lg:h-[90px]">
      <div className="fixed z-50 w-[100%] bg-white shadow-md flex items-center h-[54px] lg:h-[90px]">
        <div className="mr-auto ml-3 lg:ml-5">
          <Logo />
        </div>
        <PcMenu />
        <SpMenu />
      </div>

      <nav className="sp">
        <ul>
          <li>
            <Link href=""></Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
        </ul>
      </nav>

      <ContainerBox>
        <h1 className="">ページ見出し</h1>
      </ContainerBox>
    </header>
  )
}
