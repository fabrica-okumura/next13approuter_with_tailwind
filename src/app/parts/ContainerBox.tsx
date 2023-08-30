// export default function ContainerBox({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return <div className="px-4 lg:max-w-5xl mx-auto">{children}</div>
// }

export default function ContainerBox({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`px-4 lg:max-w-7xl mx-auto ${className}`}>{children}</div>
  )
}
