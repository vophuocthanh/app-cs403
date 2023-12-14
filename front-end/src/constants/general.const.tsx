import { IconBuilding, IconDashboard, IconStar } from '@/components/icons'
import React from 'react'

export const sidebarLinks = [
  {
    title: 'Dashboard',
    icon: <IconDashboard />,
    path: '/'
  },
  {
    title: 'Hộ Khẩu',
    icon: <IconBuilding />,
    path: '/hokhau'
  },
  {
    title: 'Nhân Khẩu',
    icon: <IconStar />,
    path: '/nhankhau'
  }
]
