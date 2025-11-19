import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilSpeedometer,
    cilGroup,
    cilUser,
    cilBook,
    cilBank,
    cilFile,
    cilLibrary,
    cilPeople,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const Navigation = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Leads',
        to: '/leads',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Students',
        to: '/students',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Courses',
        to: '/courses',
        icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    },

    {
        component: CNavGroup,
        name: 'Revenue',
        icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Live',
                to: '/revenue/live',
            },
            {
                component: CNavItem,
                name: 'Recorded',
                to: '/revenue/recorded',
            },
        ],
    },

    {
        component: CNavItem,
        name: 'Reports',
        to: '/reports',
        icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Resources',
        to: '/resources',
        icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
    },

    {
        component: CNavItem,
        name: 'Staff',
        to: '/staff',
        icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    },
]

export default Navigation
