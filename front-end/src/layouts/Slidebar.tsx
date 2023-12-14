import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { sidebarLinks } from '@/constants/general.const'

const Slidebar = () => {
  const { pathname } = useLocation()

  return (
    <div className="px-4 py-6 border-r-2 w-[16rem]">
      {sidebarLinks.map(link => (
        <SidebarLink
          key={link.title}
          link={link}
          isActive={pathname === link.path}
        ></SidebarLink>
      ))}
    </div>
  )
}

function SidebarLink({ link, isActive }) {
  return (
    <Link
      to={link.path}
      className={`px-6 py-4 gap-5 flex items-center gap-c10 font-bold text-base text-gray80 rounded-xl ${
        isActive ? 'bg-gray-300' : ''
      }`}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  )
}

export default Slidebar
