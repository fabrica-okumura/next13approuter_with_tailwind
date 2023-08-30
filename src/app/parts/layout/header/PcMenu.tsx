import Link from "next/link"

export default function PcMenu() {
  return (
    <nav className="hidden lg:block mr-5">
      <ul className="flex gap-8">
        <li>
          <a
            href="/#sec01"
            className="font-bold transition-colors hover:text-blue-600"
          >
            HomeのSec01
          </a>
        </li>
        <li>
          <Link
            href="/about"
            className="font-bold transition-colors hover:text-blue-600"
          >
            当社について
          </Link>
        </li>
        <li>
          <Link
            href="/article"
            className="font-bold transition-colors hover:text-blue-600"
          >
            記事一覧
          </Link>
        </li>
        <li>
          <Link
            href="/form"
            className="font-bold transition-colors hover:text-blue-600"
          >
            お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  )
}
