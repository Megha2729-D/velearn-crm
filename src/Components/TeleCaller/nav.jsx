import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilSpeedometer,
    cilGroup,
    cilUserFollow,
    cilLoopCircular,
    cilCheckCircle,
    cilSchool,
    cilUser,
    cilArrowRight,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const Navigation = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },

    {
        component: CNavGroup,
        name: 'Leads',
        to: '/leads',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Follow-up leads',
                to: '/tele-caller/follow-up',
                icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Sent back by counselor',
                to: '/tele-caller/sent-back',
                icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Waiting / Pending',
                to: '/tele-caller/waiting',
                icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Confirmed Students',
                to: '/tele-caller/confirmed',
                icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Currently in Class',
                to: '/tele-caller/in-class',
                icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Currently to Counselor',
                to: '/tele-caller/to-counselor',
                icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
            },
            {
                component: CNavItem,
                name: 'Assign to Class',
                to: '/tele-caller/assign',
                icon: <CIcon icon={cilArrowRight} customClassName="nav-icon" />,
            },
        ],
    },
]

export default Navigation
