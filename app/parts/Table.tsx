type Variants = "default" | "sm"

type Props = {
  variant?: Variants
  className?: string
  children: React.ReactNode
}

const baseClasses =
  "[&_th]:border border-gray-100 [&_th]:bg-gray-50 [&_th]:p-3 [&_th]:leading-tight [&_td]:border border-gray-100 [&_td]:p-3 [&_td]:leading-snug"

export default function Table({
  children,
  variant = "default",
  className = "",
}: Props) {
  let variantClasses = ""

  switch (variant) {
    case "default":
      variantClasses = ""
      break
    case "sm":
      variantClasses = "text-base"
      break
  }

  return (
    <table className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </table>
  )
}
