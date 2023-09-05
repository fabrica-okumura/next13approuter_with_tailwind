"use client"

import Button from "parts/Button"

export default function ClickButton() {
  return (
    <>
      <Button as="button" onClick={() => alert("このボタンはclient componentにimportされています。")}>
        alertを表示する
      </Button>
    </>
  )
}
