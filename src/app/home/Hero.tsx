import BtnPrimary from "../parts/BtnPrimary"
import ContainerBox from "../parts/ContainerBox"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-green-100 py-8 lg:py-14 mt-[54px] lg:mt-[90px] mb-10">
      <ContainerBox>
        <div
          className="lg:grid 
        lg:grid-cols-[1fr_500px]
        lg:grid-rows-[min-content_min-content_1fr]
        lg:gap-x-7
        "
        >
          <h2 className="text-2xl font-bold mb-5 lg:text-5xl lg:leading-tight">
            HEROタイトルHEROタイトル
            <br />
            HEROタイトル
          </h2>
          <p className="text-xl font-bold mb-7 lg:order-3">
            HEROテキストHEROテキストHEROテキストHEROテキストHEROテキストHEROテキストHEROテキストHEROテキスト
          </p>
          <Image
            src="/img/home/hero_img.png"
            width="300"
            height="230"
            alt=""
            className="block mx-auto mb-5 w-[87%] lg:order-2 lg:row-span-3 lg:w-[500px] lg:mb-0"
          />
          <div className="lg:order-4">
            <BtnPrimary href="/form" text="お問い合わせあああああああああああああああああああ" />
          </div>
        </div>
      </ContainerBox>
    </section>
  )
}
