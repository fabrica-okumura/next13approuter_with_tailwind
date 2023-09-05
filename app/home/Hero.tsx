import Button from "parts/Button"
import ContainerBox from "parts/WidthContainer"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-green-100 py-8 lg:py-14 mb-10">
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
          <div className="lg:order-4 text-center lg:text-left [&>a]:w-[95%] lg:[&>a]:w-[400px]">
            <Button href="/form" size="lg" icon="arrow">お問い合わせ</Button>
          </div>
        </div>
      </ContainerBox>
    </section>
  )
}
