'use client'


import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({title, url }) => {
    const pathName = usePathname()
    
  return (
      <Link className={`rounded p-2 ${pathName === url && 'bg-slate-500 text-white'}`} href={url}>{title }</Link>
  )
}

export default NavLink