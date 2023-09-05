import Hero from "home/Hero"
import Button from "parts/Button"
import ClickButton from "home/ClickButton"
import WidthContainer from "parts/WidthContainer"
import Heading from "parts/Heading"
import SectionContainer from "parts/SectionContainer"
import TextLink from "parts/TextLink"
import TextMarker from "parts/TextMarker"
import List from "parts/List"
import Table from "parts/Table"

export default function Page() {
  return (
    <main>
      <Hero />

      <SectionContainer bg="color_a">
        <WidthContainer>
          <Heading>セクションコンテナ</Heading>
          <p>
            上下にスペースのあるセクションコンテナです。デフォルトはsection。divへの変更可。size2種、背景色1種を設定しています。
          </p>
        </WidthContainer>
      </SectionContainer>

      <SectionContainer as="div" id="bbb" size="sm">
        <p>ここではセクションコンテナをdivにしています。sizeはsm。id追加可。</p>
      </SectionContainer>

      <SectionContainer>
        <WidthContainer>
          <Heading>幅コンテナ</Heading>
          <p>
            コンテンツの左右スペース有無とmax-widthのvariantsのあるdivコンテナです。
          </p>
        </WidthContainer>
        <WidthContainer>
          <p className="bg-blue-100">default</p>
        </WidthContainer>
        <WidthContainer type="only_pc">
          <p className="bg-red-100">only_pc</p>
        </WidthContainer>
        <WidthContainer type="only_sp">
          <p className="bg-orange-100">only_sp</p>
        </WidthContainer>
        <WidthContainer type="narrow">
          <p className="bg-purple-100">narrow</p>
        </WidthContainer>
        <WidthContainer type="narrow_only_pc">
          <p className="bg-green-100">narrow_only_pc</p>
        </WidthContainer>
      </SectionContainer>

      <SectionContainer bg="color_a">
        <WidthContainer type="narrow">
          <Heading>ヘディング</Heading>
          <p className="mb-10">デフォルトはh2です。</p>
          <Heading variant="secondary">セカンダリ</Heading>
          <Heading variant="tertiary">ターシャリ</Heading>
          <Heading variant="quaternary">クォータナリ</Heading>
        </WidthContainer>
      </SectionContainer>

      <SectionContainer size="sm">
        <WidthContainer>
          <Heading>ボタン/ボタンリンク</Heading>
          <p>サイズ3種、カラー2種、アイコン有無。</p>
          <Heading as="h3" variant="secondary">
            サイズ
          </Heading>
          <Button href="/about" size="sm">
            サイズsm
          </Button>
          <Button href="/about">サイズデフォルト（md）aboutページへ</Button>
          <Button href="/about" size="lg">
            サイズlg
          </Button>
          <Heading as="h3" variant="secondary">
            カラー
          </Heading>
          <Button href="/about" color="primary">
            カラーデフォルト（primary）aboutページへ
          </Button>
          <Button href="/about" color="secondary">
            カラーsecondary
          </Button>
          <Heading as="h3" variant="secondary">
            ボタンアイコン
          </Heading>
          <Button href="/about" icon="arrow">
            アイコン矢印
          </Button>
          <Button href="/about" size="sm" icon="arrow_down">
            アイコン下矢印
          </Button>
          <Button href="/about" size="lg" icon="arrow_back">
            アイコン左矢印
          </Button>
          <Heading as="h3" variant="secondary">
            タグの種類
          </Heading>
          <p>デフォルトはNext/link。</p>
          <p>
            _blankリンクの場合as=&quot;a&quot;、target=&quot;_blank&quot;を追加します。
          </p>
          <Button
            as="a"
            href="https://www.google.com/?hl=ja"
            target="_blank"
            color="primary"
            rel="nofollow"
            size="md"
          >
            Googleへ
          </Button>
          <p>ページ内リンクの場合もas=&quot;a&quot;とします。</p>
          <Button as="a" href="#sec01">
            Sec1へ
          </Button>
          <p>
            buttonにする場合as=&quot;button&quot;とします。onClickイベントハンドラが必要な場合はNext.jsの仕様上、clientコンポーネントの中にある必要があります。
          </p>
          <ClickButton />
        </WidthContainer>
      </SectionContainer>

      <SectionContainer size="sm">
        <WidthContainer>
          <Heading>テキストリンク/装飾テキスト</Heading>
          <p>
            <TextLink href="/about">テキストリンクアイコンなし</TextLink>、
            <TextLink href="/about" icon="arrow">
              矢印テキストリンク
            </TextLink>
            、
            <TextLink
              as="a"
              href="https://www.google.com/?hl=ja"
              target="_blank"
              icon="blank"
            >
              _blankテキストリンク
            </TextLink>
            です。
          </p>
          <p>
            <TextMarker>これは強調テキスト</TextMarker>です。
          </p>
        </WidthContainer>
      </SectionContainer>

      <SectionContainer>
        <WidthContainer>
          <Heading>リスト</Heading>
          <List className="mb-5">
            <li>
              デフォルト。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
            </li>
            <li>いいいいいいいいいいいいいいいい</li>
          </List>

          <List variant="border">
            <li>
              ボーダー装飾variant。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
            </li>
            <li>いいいいいいいいいいいいいいいい</li>
          </List>
        </WidthContainer>
      </SectionContainer>

      <SectionContainer>
        <WidthContainer>
          <Heading>テーブル</Heading>
          <Table className="mb-10">
            <tbody>
              <tr>
                <th scope="row">見出し</th>
                <td>セル内容セル内容セル内容<br />セル内容セル内容セル内容</td>
              </tr>
              <tr>
                <th scope="row">見出し</th>
                <td>セル内容セル内容セル内容</td>
              </tr>
              <tr>
                <th scope="row">見出し</th>
                <td>セル内容セル内容セル内容</td>
              </tr>
            </tbody>
          </Table>

          <Table variant="sm">
            <tbody>
              <tr>
                <th scope="col">見出し</th>
                <th scope="col">見出し</th>
                <th scope="col">見出し</th>
              </tr>
              <tr>
                <td>variant smセル内容セル内容セル内容<br />セル内容セル内容セル内容</td>
                <td>セル内容セル内容セル内容</td>
                <td>セル内容セル内容セル内容</td>
              </tr>
            </tbody>
          </Table>
        </WidthContainer>
      </SectionContainer>

      <SectionContainer>
        <WidthContainer>
          <Heading>他</Heading>
          <p>アコーディオン</p>
          <p>モーダル</p>
          <p><a href="https://tailwindui.com/components#product-application-ui" target="_blank">この辺</a></p>
        </WidthContainer>
      </SectionContainer>

      {/* <div className="group m-10 p-10 border hover:bg-gray-100">
        <p className="font-black hover:text-red-900">New Project</p>
        <p className="font-black group-hover:text-blue-900">Next Project</p>
      </div> */}
      <p className="line-clamp-3">
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい
      </p>
      {/* <div className="h-[500px] bg-indigo-600 w-[2000px] text-center">aa</div> */}
      <section id="sec01" className="h-[5000px] bg-indigo-300">
        ここはsec1
      </section>
    </main>
  )
}

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
