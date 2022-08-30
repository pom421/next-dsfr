import type { NextPage } from "next"

import { LinkButton } from "@/components/Button"

const CGU: NextPage = () => {
  return (
    <>
      <h1>CGU</h1>
      <LinkButton href="javascript:window.history.back()">Retour arrière</LinkButton>
    </>
  )
}

export default CGU
