import Link from "next/link"

export default function PcMenu() {
  const items = [
    { label: "HomeのSec01", href: "/#sec01", tag: "a" },
    { label: "当社について", href: "/about", tag: "Link" },
    { label: "記事一覧", href: "/article", tag: "Link" },
    { label: "お問い合わせ", href: "/form", tag: "Link" },
  ]

  return (
    <nav className="hidden lg:block mr-5">
      <ul className="flex gap-8">
        {items.map((item, index) => {
          const Tag = item.tag === "Link" ? Link : "a"
          return (
            <li key={index}>
              <Tag
                href={item.href}
                className="font-bold hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Tag>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
