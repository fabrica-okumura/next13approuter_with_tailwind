export default function TextMarker({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <strong className="bg-gradient-to-b from-transparent from-50% to-[#ffd4ce] to-50%">
      {children}
    </strong>
  )
}
