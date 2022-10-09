import Router from "next/router"
import { useCallback } from "react"
import Logo from "../assets/logo"

export default function Navbar() {

  const handleLogoClick = useCallback(() => {
    Router.push('/')
  }, [])

  return (
    <div>
      <div className="h-2 px-24 py-10 flex items-center cursor-pointer" onClick={handleLogoClick}>
        <Logo />
        <p className="ml-3 font-semibold">NFT Commerce</p>
      </div>
      <hr className="w-full border-[#242634]"/>
    </div>
  )
}