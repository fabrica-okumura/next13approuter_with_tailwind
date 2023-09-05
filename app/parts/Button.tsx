import Link from "next/link"

type CustomProps = {
  as?: "link" | "a" | "button"
  color?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  icon?: "none" | "arrow" | "arrow_back" | "arrow_down"
}

type LinkElementProps = CustomProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonElementProps = CustomProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = LinkElementProps | ButtonElementProps

export default function Button(props: ButtonProps) {
  const {
    as = "link",
    color = "primary",
    size = "md",
    icon = "none",
    children,
    ...restProps
  } = props

  const baseClasses =
    "inline-flex justify-center !leading-[1.2] font-semibold text-white relative  lg:transition-all"

  const colorClasses = {
    primary: "bg-red-500 lg:hover:bg-red-700",
    secondary: "bg-blue-500 lg:hover:bg-blue-700",
  }

  const sizeClasses = {
    sm: "py-[.5em] px-[1em] text-sm rounded-md",
    md: "py-[.7em] px-[1.4em] text-md rounded-lg",
    lg: "py-[1em] px-[2em] text-lg rounded-lg",
  }

  const baseIconClasses =
    "after:absolute after:content-[''] after:w-[1em] after:h-[1em] after:m-auto after:bg-[url(/img/common/icon_arrow_white.svg)] after:bg-no-repeat after:bg-contain"

  const iconClasses = {
    none: "after:content-none",
    arrow: "pr-[2em] after:inset-[0_.5em_0_auto]",
    arrow_back: "pl-[2em] after:inset-[0_auto_0_.5em] after:-rotate-180",
    arrow_down: "pr-[2em] after:inset-[0_.5em_0_auto] after:rotate-90",
  }

  const allClasses = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${baseIconClasses} ${iconClasses[icon]}`

  const commonProps: any = { className: allClasses, ...restProps }

  switch (as) {
    case "link":
      return <Link {...commonProps}>{children}</Link>
    case "a":
      return <a {...commonProps}>{children}</a>
    case "button":
      return <button {...commonProps}>{children}</button>
  }
}
