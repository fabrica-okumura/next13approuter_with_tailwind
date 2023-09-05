import Image from "next/image"
import BtnToTop from "./BtnToTop"
import ContainerBox from "../../parts/WidthContainer"

export default function PageFooter() {
  return (
    <footer className="bg-blue-100 py-9 lg:py-11">
      <BtnToTop />
      <ContainerBox>
        <div className="lg:flex lg:justify-between lg:items-center">
          <Image
            src="/img/common/logo_footer.svg"
            alt="ダミーカンパニー"
            width="180"
            height="23"
            className="block mx-auto mb-6 lg:m-0 lg:w-[240px] lg:h-[30px]"
          />
          <small className="block text-center text-xs lg:text-sm text-slate-500">
            &copy; dummy company Co., LTD.
          </small>
        </div>
      </ContainerBox>
    </footer>
  )
}
