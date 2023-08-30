import Link from "next/link"

type Props = {
  href: string
  text: string
  target?: string
}

export default function BtnPrimary({ href, text, target }: Props) {
  return (
    <Link href={href} target={target} className="inline-flex justify-center text-center bg-red-600 p-[16px_36px_16px_32px] text-white font-bold rounded-md relative leading-tight
    after:absolute after:inset-y-0 after:right-3 after:left-auto after:m-auto after:w-[16px] after:h-[16px] after:bg-[url(/img/common/icon_arrow_white.svg)] after:bg-no-repeat after:bg-contain
    ">
      {text}
    </Link>
  )
}
