import Link from "next/link"

type CustomProps = {
  as?: "link" | "a"
  icon?: "none" | "arrow" | "blank"
}

type LinkElementProps = CustomProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function TextLink(props: LinkElementProps) {
  const { as = "link", icon = "none", children, ...restProps } = props

  const baseClasses =
    "inline-flex items-center text-blue-500 lg:transition-all hover:lg:opacity-60"

  const baseIconClasses =
    "after:content-[''] after:bg-no-repeat after:bg-contain"

  const iconClasses = {
    none: "after:content-none",
    arrow:
      "after:w-[.7em] after:h-[.7em] after:bg-[url(/img/common/icon_arrow_blue.svg)]",
    blank:
      "gap-[2px] after:w-[1em] after:h-[1em] after:bg-[url(/img/common/icon_blank_blue.svg)]",
  }

  const allClasses = `${baseClasses} ${baseIconClasses} ${iconClasses[icon]}`

  const commonProps: any = { className: allClasses, ...restProps }

  switch (as) {
    case "link":
      return <Link {...commonProps}>{children}</Link>
    case "a":
      return <a {...commonProps}>{children}</a>
  }
}
