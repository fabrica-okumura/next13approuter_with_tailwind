type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  variant?: "primary" | "secondary" | "tertiary" | "quaternary"
  children: React.ReactNode
}

const variants = {
  primary: "font-bold text-2xl text-blue-500 border-l-[10px] border-blue-500 pl-2 pt-4 mb-7 lg:text-4xl lg:mb-14",
  secondary: "font-bold relative text-xl pb-5 mb-5 after:content-[''] after:w-[24px] after:h-[3px] after:bg-blue-500 after:absolute after:left-0 after:bottom-0 lg:after:w-[38px] lg:after:h-[4px]",
  tertiary: "font-bold text-xl pb-5 mb-5",
  quaternary: "font-bold text-lg pb-5 mb-5",
}

export default function Heading({ as = "h2", variant = "primary", children }: Props) {
  switch (as) {
    case "h1":
      return <h1 className={`${variants[variant]}`}>{children}</h1>
    case "h2":
      return <h2 className={`${variants[variant]}`}>{children}</h2>
    case "h3":
      return <h3 className={`${variants[variant]}`}>{children}</h3>
    case "h4":
      return <h4 className={`${variants[variant]}`}>{children}</h4>
    case "h5":
      return <h5 className={`${variants[variant]}`}>{children}</h5>
    case "h6":
      return <h6 className={`${variants[variant]}`}>{children}</h6>
  }
}
