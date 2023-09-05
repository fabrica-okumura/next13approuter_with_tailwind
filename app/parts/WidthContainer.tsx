// コンテンツの左右スペース有無とmax-widthを定義する
type Variants = "default" | "only_pc" | "only_sp" | "narrow" | "narrow_only_pc"

type Props = {
  type?: Variants
  children: React.ReactNode
}

export default function WidthContainer({ children, type = "default" }: Props) {
  let typeClasses = ""

  switch (type) {
    case "default":
      typeClasses = "px-4 lg:max-w-6xl"
      break
    case "only_pc":
      // SP時の左右スペースなし。PC2カラム時などに使用。
      typeClasses = "lg:px-4 lg:max-w-6xl"
      break
    case "only_sp":
      // PC時の左右スペースなし。PC2カラムレイアウト時など。
      typeClasses = "px-4 lg:px-0"
      break
    case "narrow":
      // PC時コンテンツ幅が狭いバージョン。
      typeClasses = "px-4 lg:max-w-4xl"
      break
    case "narrow_only_pc":
      // SP時の左右スペースなし。PC時コンテンツ幅が狭いバージョン。
      typeClasses = "lg:px-4 lg:max-w-4xl"
      break
  }

  return <div className={`${typeClasses} mx-auto`}>{children}</div>
}
