import Link from "next/link"

type CustomProps = {
  as?: "link" | "a" | "button"
  color?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  icon?: "none" | "arrow" | "arrow_back" | "arrow_down"
  href?: string
  target?: string
  id?: string
  onClick?: () => void
}

// type ButtonProps = CustomProps &
//   Omit<
//     React.HTMLProps<HTMLButtonElement | HTMLAnchorElement>,
//     keyof CustomProps
//   >
type LinkProps = CustomProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type AnchorProps = CustomProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonElementProps = CustomProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkProps | AnchorProps | ButtonElementProps;

export default function Button(props: ButtonProps) {
  
  const {
    as = "link",
    id,
    href,
    target,
    onClick,
    color = "primary",
    size = "md",
    icon = "none",
    children,
    ...restProps
  } = props



  const baseClasses =
    "inline-flex justify-center text-center !leading-[1.2] font-semibold text-white relative"

  const colorClasses = {
    primary: "bg-red-500 lg:hover:bg-red-700 lg:transition-all",
    secondary: "bg-blue-500 lg:hover:bg-blue-700 lg:transition-all",
  }

  const sizeClasses = {
    sm: "py-[.5em] px-[1em] text-sm rounded-md",
    md: "py-[.7em] px-[1.4em] text-md rounded-lg",
    lg: "py-[1em] px-[2em] text-lg rounded-lg",
  }

  const defaultIconClasses =
    "after:absolute after:content-[''] after:w-[1em] after:h-[1em] after:m-auto"

  // 右、左戻る、下afterでやるか。
  const iconClasses = {
    none: "after:content-none",
    arrow: "pr-[2em] after:inset-[0_.5em_0_auto] after:bg-green-300",
    arrow_back: "pl-[2em] after:inset-[0_auto_0_.5em] after:bg-green-300",
    arrow_down: "pr-[2em] after:inset-[0_.5em_0_auto] after:bg-green-300",
  }

  // const allClasses = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]}`
  const allClasses = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${defaultIconClasses} ${iconClasses[icon]}`

  const commonProps: any = { id, className: allClasses, ...restProps };

  // const iconElement = icon ? (
  //   <i className={`${defaultIconClasses} ${iconClasses[icon]}`} />
  // ) : null
  // const commonProps = { id, className: allClasses, ...restProps }

  switch (as) {
    case "link":
      return (
        <Link href={href || ""} {...commonProps}>
          {children}
        </Link>
      )
    case "a":
      return (
        <a href={href} target={target} {...commonProps}>
          {children}
        </a>
      )
    case "button":
      return (
        <button onClick={onClick} {...commonProps}>
          {children}
        </button>
      )
  }
}
