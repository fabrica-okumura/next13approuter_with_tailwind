type Props = {
  as?: "section" | "div"
  id?: string
  size?: "sm" | "md"
  bg?: "none" | "color_a"
  children: React.ReactNode
}

const sizeClasses = {
  sm: "pt-12 lg:pt-24",
  md: "py-12 lg:py-24",
}

const bgClasses = {
  none: "",
  color_a: "bg-gray-100",
}

export default function SectionContainer({
  as = "section",
  id,
  size = "md",
  bg = "none",
  children,
}: Props) {
  const allClasses = `${sizeClasses[size]} ${bgClasses[bg]}`

  switch (as) {
    case "section":
      return <section id={id} className={allClasses}>{children}</section>
    case "div":
      return <div id={id} className={allClasses}>{children}</div>
  }
}
