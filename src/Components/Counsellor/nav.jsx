import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilSpeedometer,
    cilGroup,
    cilLibrary,
    cilLaptop,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const Navigation = [
    // DASHBOARD
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/counsellor/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },

    // LEADS
    {
        component: CNavItem,
        name: 'Leads',
        to: '/counsellor/leads',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
        // items: [
        //     {
        //         component: CNavItem,
        //         name: 'Follow-up leads',
        //         to: '/tele-caller/follow-up',
        //     },
        //     {
        //         component: CNavItem,
        //         name: 'Sent back by counselor',
        //         to: '/tele-caller/sent-back',
        //     },
        //     {
        //         component: CNavItem,
        //         name: 'Waiting / Pending',
        //         to: '/tele-caller/waiting',
        //     },
        //     {
        //         component: CNavItem,
        //         name: 'Confirmed Students',
        //         to: '/tele-caller/confirmed',
        //     },
        //     {
        //         component: CNavItem,
        //         name: 'Currently in Class',
        //         to: '/tele-caller/in-class',
        //     },
        //     {
        //         component: CNavItem,
        //         name: 'Currently to Counselor',
        //         to: '/tele-caller/to-counselor',
        //     },
        //     {
        //         component: CNavItem,
        //         name: 'Assign to Class',
        //         to: '/tele-caller/assign',
        //     },
        // ],
    },

    // RESOURCES
    {
        component: CNavGroup,
        name: 'Resources',
        icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Student Projects',
                to: '/counsellor/resources/study-materials',
            },
            {
                component: CNavItem,
                name: 'Course Presentation Decks',
                to: '/counsellor/resources/video-library',
            },
            {
                component: CNavItem,
                name: 'Certificate Samples',
                to: '/counsellor/resources/documents',
            },
        ],
    },

    // ONLINE CONNECT
    {
        component: CNavGroup,
        name: 'Online Connect',
        icon: <CIcon icon={cilLaptop} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Live Classes',
                to: '/counsellor/online-connect/live-classes',
            },
            {
                component: CNavItem,
                name: 'Upcoming Webinars',
                to: '/counsellor/online-connect/webinars',
            },
            {
                component: CNavItem,
                name: 'Join Meeting',
                to: '/counsellor/online-connect/join-meeting',
            },
        ],
    },
]

export default Navigation
