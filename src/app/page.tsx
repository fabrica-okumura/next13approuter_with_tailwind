import Hero from "./home/Hero";

export default function Page() {
  return (
    <>
    <Hero />
    {/* <p>faviconが消えた。use clientのせい？
    How to Add favicon.ico on NextJs 13 · vercel/next.js · Discussion #50704
https://github.com/vercel/next.js/discussions/50704#discussioncomment-6073844
    </p>
      <p>
      Tailwind CSS で子孫セレクタなどを指定できる arbitrary variants ++ Gaji-Laboブログ
https://www.gaji.jp/blog/2022/10/19/11693/

この辺読んだほうがよさそう。
Adding Custom Styles - Tailwind CSS
https://tailwindcss.com/docs/adding-custom-styles#arbitrary-variants
      </p>
      <p>
      className=[scroll-behavior: smooth !important] [scroll-padding-top: 100px]がきかない
      </p>
      <p>
      Plugins - Tailwind CSS
https://tailwindcss.com/docs/plugins#css-in-js-syntax
css-in-jsをつかえるか。
      </p> */}
      <p>
      React + TypeScript： コンポーネント間で状態を共有する - Qiita
https://qiita.com/FumioNonaka/items/611bd5e0cd254c0e9ea0
状態の引き上げ。。
      </p>
      <p>
      Next.js と TypeScript で、props の最適な渡し方を理解する - コムテブログ
https://commte.net/nextjs-props
typeとinterfaceの違いは？両方とも TypeScript での型定義に使われますが、一部の機能や記法が異なることを理解しておくと良いでしょう。
      </p>
      <p>
      TypeScript+Reactでpropsを使ってコンポーネントにデータを渡す流れ - Qiita
https://qiita.com/Captain_Blue/items/05b5135d34ecc35fe896
      </p>
      
      <h1 className="p-32 text-3xl underline __pt-2 __pb-10 font-extrabold text-blue-500 bg-green-400">
        先に書いたクラス名が優先されている？この場合p-5が生きている。あああああああああああああああああああああ
      </h1>
      <button className="btn btn--secondary block">Decline</button>
      <button className="btn btn--primary bg-red-600 mb-10 opacity-20 ">
        Accept
      </button>
      <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded hover:text-black">
        ボタン
      </button>
      <button className="btna">あああああああ</button>
      <button className="btna bg-red-500 hover:bg-green-400 duration-[2000ms] hover:animate-bounce">
        btnaの色違い
      </button>

      <div className="group m-10 p-10 border hover:bg-gray-100">
        <p className="font-black hover:text-red-900">New Project</p>
        <p className="font-black group-hover:text-blue-900">Next Project</p>
      </div>
      <p className="line-clamp-3">
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい
      </p>
      {/* <div className="h-[500px] bg-indigo-600 w-[2000px] text-center">aa</div> */}
      <section id="sec01" className="h-[5000px] bg-indigo-300 hover:bg-cyan-600">
        ここはsec1
      </section>
    </>
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
