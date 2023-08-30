// Props.children？
// type Props = {
//   title: string
// }

// const PageTitle = ({ title }: Props) => {
export default function PageTitle() {
  return (
    <div className=" mt-[54px] lg:mt-[90px]">
    <h1 className="bg-red-300 p-6">
      {/* ここに各ページで定義したテキストを表示 */}
    </h1>
    </div>
  )
}
