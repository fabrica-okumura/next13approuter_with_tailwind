// レイアウトのネスト。about配下のみ適用される。

export default function AboutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>about専用のナビ</nav>

      {children}
    </div>
  )
}
