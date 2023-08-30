
next.jsで共通レイアウトファイルにpageheaderコンポーネントをimportしている。
複数ページでh1タイトルのテキストを設定し、それをpageheaderにあるh1に表示したい場合どうすればいいか。

Next.js の App Router で 親layout を継承しない方法
https://zenn.dev/leaner_dev/articles/235fd4f98e78d2


next.js passing props from page to layout


# やること
- metadata
- favicon
- ページごとのコンポーネント出し分け。ルートグループ？https://nextjs.org/docs/app/building-your-application/routing/route-groups
- autoprefixer
- postcssの中身
- @applyはcssに書く（componentsの下？）@layer?
```css
@tailwind base;
@tailwind components;
.btn {
  @apply font-semibold text-white py-2 px-4 rounded;
}
@tailwind utilities;
```

# 調べること
- line-height:1に固定したい。
- font-family
- webフォント
- エラーページ404/500?

not-found.js https://nextjs.org/docs/app/api-reference/file-conventions/not-found
Next.js（13.4）のApp Routerで404ページをカスタムしつつタイトルなどのmetadataを変更する 4️⃣ - みかづきブログ・カスタム
https://blog.kimizuka.org/entry/2023/06/22/235529

どう使うかの議論
Reusing Styles - Tailwind CSS
https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply

# プロジェクト作成
Install Tailwind CSS with Next.js - Tailwind CSS
https://tailwindcss.com/docs/guides/nextjs
```bash
npx create-next-app@latest プロジェクト名 --typescript --eslint
```
（tailwindはNoを選択。）
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

prettier-plugin-tailwindcssインストールしたが、機能しない。
```bash
npm install -D prettier prettier-plugin-tailwindcss
```
eslint-plugin-tailwindcssインストール？？

TailwindCSSを使う際に導入しておきたいPrettier, ESLint, VSCodeのプラグイン
https://zenn.dev/dev_shun/articles/f3d4634a25cabf


/app/page.module.cssは不要なので削除

Tailwind CSS Cheat Sheet
https://tailwindcomponents.com/cheatsheet/

tailwindでSASSを使う。

# エディターの設定
- vscodeにTailwind CSS IntelliSenseをインストール。
クラス名の補完、クラス名マウスオーバーでプロパティの説明が出る。
- vscodeの補完をタイムラグなしで表示するためvscodeのsettings.jsonに以下を追加。
```bash
 "editor.quickSuggestions": {
    "strings": true
  }
```

## Unknown at rule @tailwind警告への対応
https://marketplace.visualstudio.com/items?itemName=csstools.postcss
をインストールする方法があるが他のプラグインに影響するなど、評価がことごとく悪い。
vscodeで対象のcssを開き「言語モードの選択」でtailwindcssにすればOK。

VSCode で Tailwind CSS のクラス名を自動補完する拡張機能が便利です ++ Gaji-Laboブログ
https://www.gaji.jp/blog/2022/02/14/9129/

今すぐTailwindでの開発を楽にするお手軽2ステップ
https://zenn.dev/ikenohi/articles/df2bf0c990d99a

tailwind.config.jsテーマの設定、不要cssの削除、@applyでまとめる？

ウェブアプリ開発にTailwind CSSを導入してみた | techlab / baigie
https://baigie.me/engineerblog/integrating-tailwind-css/




 # app router注意点
 - "use client"がファイル内で定義されると、そのファイルにインポートされた他のすべてのモジュール (子コンポーネントを含む) はクライアント バンドルの一部とみなされます。
 - "use client"すべてのファイルで定義する必要はありません。クライアント モジュールの境界は、そこにインポートされるすべてのモジュールがクライアント コンポーネントとみなされるように、「エントリ ポイント」で 1 回定義するだけで済みます。
 - サーバー上で事前レンダリングしてクライアント上でハイドレートすることもできます。
 - use clientの仕様例：ブラウザ専用 API を使用する。状態、効果、またはブラウザ専用 API に依存するカスタム フックを使用する。Reactクラスコンポーネントを使用する。
 - サポートされていないパターン: サーバー コンポーネントをクライアント コンポーネントにインポートする→推奨パターン: サーバー コンポーネントを Props としてクライアント コンポーネントに渡す
 ```ts
 // This pattern works:
// You can pass a Server Component as a child or prop of a
// Client Component.
import ExampleClientComponent from './example-client-component'
import ExampleServerComponent from './example-server-component'
 
// Pages in Next.js are Server Components by default
export default function Page() {
  return (
    <ExampleClientComponent>
      <ExampleServerComponent />
    </ExampleClientComponent>
  )
}
 ```
 - 「サーバーのみ」パッケージの作成
 server-only、まずパッケージをインストール
 ```bash
 npm install server-only
 ```
 - モジュールにパッケージをimport
 ```ts
 import 'server-only'
 
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })
 
  return res.json()
}
 ```
 client-onlyもあるみたい。


 # layout
 - 親レイアウトとその子の間でデータを受け渡すことはできません。
 - レイアウトは現在のルート セグメントにアクセスできません。ルート セグメントにアクセスするには、クライアント コンポーネントでuseSelectedLayoutSegmentまたはuseSelectedLayoutSegmentsを使用できます。
 - レイアウトのグループ化：(フォルダ名)を使うとセグメント（URL）を生成しなくなる。
 - 複数ルートレイアウトの作成。app/layoutを削除し各ルートにlayoutを作成する（html/bodyタグもここに）

 # template
 ルート間で持続して状態を維持するレイアウトとは異なり、テンプレートはナビゲーション上の各子に対して新しいインスタンスを作成します。これは、ユーザーがテンプレートを共有するルート間を移動すると、コンポーネントの新しいインスタンスがマウントされ、DOM 要素が再作成され、状態は保持されず、エフェクトが再同期されることを意味します。

これらの特定の動作が必要な場合は、レイアウトよりもテンプレートの方が適切なオプションとなる場合があります。例えば：
- CSS またはアニメーション ライブラリを使用してアニメーションを開始/終了します。
- useEffect(ページ ビューのログ記録など) およびuseState(ページごとのフィードバック フォームなど)に依存する機能。

# metadata
https://nextjs.org/docs/app/api-reference/functions/generate-metadata

robotsやogなど。faviconは？

# LinkとuseRouter()
router.prefetchができない？
プリフェッチは開発環境では有効ではなく、運用環境でのみ有効になります。

# ルートグループ()とダイナミックルート[]
generateStaticParams()
サーバー関数。セグメントのパラメータを生成する。ビルド時に静的にルートを生成する。
自動的にメモ化される。
https://nextjs.org/docs/app/building-your-application/caching#request-memoization
```ts
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```
- キャッチオールセグメント[...folderName]
- オプションのキャッチオールセグメント[[...folderName]]パラメーターのないルートも一致する。

# LoadingとStreaming
## loading.js
https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
page.jsファイルとその下にある子は自動的に境界で囲まれます<Suspense>。
推奨事項とのこと。
```ts
// Suspenseの例
import { Suspense } from 'react'
import { PostFeed, Weather } from './Components'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  )
}
```

# エラーハンドリング
# Parallel Routes
以降流し読み。

# Tailwindを使ったFont設定
https://nextjs.org/docs/app/building-your-application/optimizing/fonts

# メタデータ
https://nextjs.org/docs/app/building-your-application/optimizing/metadata

https://nextjs.org/docs/app/api-reference/file-conventions/metadata

OG,JSON-LD，ファビコン ,robots, sitemap.xmlなど

# ESLintとPrettierの併用
https://nextjs.org/docs/app/building-your-application/configuring/eslint

# Dockerイメージ作成
https://nextjs.org/docs/app/building-your-application/deploying

# Image
https://nextjs.org/docs/app/api-reference/components/image

avif/webpサポート

# Layout.js
https://nextjs.org/docs/app/api-reference/file-conventions/layout

Pagesとは異なり、Layout コンポーネントはpropを受け取りません

# Favicon
https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

favicon.icoイメージはapp/ の最上位レベルにのみ配置できます。

# サイトマップ
https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
静的なものしか置けない？動的ルーティングの場合はどうするのか。ファイル分割は今のところできない。

# useSelectedLayoutSegment
https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment

呼び出し元のレイアウトの1 レベル下のアクティブなルート セグメントを読み取ることができるクライアント コンポーネントフックです。

これは、アクティブな子セグメントに応じてスタイルが変更される親レイアウト内のタブなどのナビゲーション UI に役立ちます。
アクティブリンクなど。

# useSelectedLayoutSegments
https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments

ブレッドクラムなどのアクティブな子セグメントの知識が必要な親レイアウトで UI を作成する場合に役立ちます。

# リダイレクト
next.cofig.jsでリダイレクト可能






