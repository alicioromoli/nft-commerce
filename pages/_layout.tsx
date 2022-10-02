import {ReactNode} from 'react'
import Navbar from './_navbar';

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className="bg-[#1d1f2b]">
        <Navbar />
      {children}
    </div>
  )
}