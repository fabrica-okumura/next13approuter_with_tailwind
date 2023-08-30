export default function Hamburger() {
  return (
    <div className="xl:hidden w-[54px] h-[54px] ml-auto bg-blue-200 relative [&>span]:block [&>span]:bg-blue-500 [&>span]:h-[2px] [&>span]:w-[20px] [&>span]:absolute [&>span]:inset-0 [&>span]:m-auto">
      <span className="translate-y-[-6px]"></span>
      <span></span>
      <span className="translate-y-[6px]"></span>
    </div>
  )
}
