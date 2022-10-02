import Logo from "../assets/logo";

export default function Footer() {
  return (
    <div className="px-24 mt-10 pb-4">
      <hr className="w-full border-[#243634] mt-12"/>
      <div className="h-16 py-10 flex items-center">
        <Logo />
        <p className="ml-3 text-[#93989a]">Coders NTF. All rights reserved</p>
      </div>
    </div>
  )
}