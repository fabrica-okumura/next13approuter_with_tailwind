type Variants = "default" | "border"

type Props = {
  variant?: Variants
  className?: string
  children: React.ReactNode
}

const baseClasses =
  "grid gap-y-2 [&>li]:pl-4 [&>li]:relative [&>li:before]:content-[''] [&>li:before]:absolute [&>li:before]:left-0"

export default function List({
  children,
  variant = "default",
  className = "",
}: Props) {
  let variantClasses = ""

  switch (variant) {
    case "default":
      variantClasses =
        "[&>li:before]:w-[.5em] [&>li:before]:h-[.5em] [&>li:before]:top-[.5em] [&>li:before]:bg-blue-500 [&>li:before]:rounded-full"
      break
    case "border":
      variantClasses =
        "[&>li:before]:w-[10px] [&>li:before]:h-[2px] [&>li:before]:top-[.7em] [&>li:before]:bg-blue-500"
      break
  }

  return (
    <ul className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </ul>
  )
}
