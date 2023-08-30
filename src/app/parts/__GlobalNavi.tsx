import Link from "next/link"

export default function GlobalNavi() {
  return (
    <nav className="hidden xl:block mr-5">
      <ul className="flex gap-8">
        {[
          ["HomeSec1", "#section_title"],
          ["当社について", "/about"],
          ["記事一覧", "/article"],
          ["お問い合わせ", "/inquiry"],
        ].map(([title, url], index) => (
          <li
            key={index}
            className="font-bold transition-colors hover:text-blue-600"
          >
            <Link href={url}>{title}ああ</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}