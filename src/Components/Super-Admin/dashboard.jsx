import React, { useState, useEffect, useRef, useMemo } from 'react'
import classNames from 'classnames'
import {
    CCard,
    CWidgetStatsA,
    CContainer,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CCardFooter,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle,
    CProgress,
    CBadge,
    CListGroup,
    CListGroupItem,
    CButton,
    CButtonGroup,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilCalendar, cilOptions, cilCloudDownload } from '@coreui/icons'
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
import {
    CChartDoughnut,
    CChartLine,
    CChartBar,
} from '@coreui/react-chartjs'
import MainChart from './MainChart'
// import AppBreadcrumb from './AppBreadcrumb'
// ⭐ NEW Radial Gauge Component (small + animated)

const RadialGauge = ({ value, label, color }) => (
    <div className="text-center">
        <svg width="90" height="90">
            <circle
                cx="45"
                cy="45"
                r="35"
                stroke="#eee"
                strokeWidth="10"
                fill="none"
            />
            <circle
                cx="45"
                cy="45"
                r="35"
                stroke={color}
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={`${(value / 100) * 220} 220`}
                style={{ transition: "stroke-dasharray 1.2s ease" }}
            />
            <text
                x="50%"
                y="52%"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
            >
                {value}%
            </text>
        </svg>
        <div className="mt-1 fw-semibold small">{label}</div>
    </div>
)

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const widgetChartRefTop1 = useRef(null)
    const widgetChartRefTop2 = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 500)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        document.documentElement.addEventListener('ColorSchemeChange', () => {
            if (widgetChartRefTop1.current) {
                setTimeout(() => {
                    widgetChartRefTop1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
                    widgetChartRefTop1.current.update()
                })
            }

            if (widgetChartRefTop2.current) {
                setTimeout(() => {
                    widgetChartRefTop2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
                    widgetChartRefTop2.current.update()
                })
            }
        })
    }, [widgetChartRefTop1, widgetChartRefTop2])

    const widgetChartRef1 = useRef(null)
    const perfChartRef = useRef(null)

    const leadSource = useMemo(
        () => ({
            labels: ['Google Ads', 'Facebook', 'Instagram', 'Referral'],
            datasets: [
                {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [120, 80, 65, 45],
                },
            ],
        }),
        [],
    )

    const leadsOverview = useMemo(
        () => ({
            hot: 45,
            warm: 35,
            cold: 20,
        }),
        [],
    )

    const enrollments = useMemo(() => ({ live: 240, recorded: 172 }), [])
    const revenue = useMemo(() => ({ live: 98000, recorded: 42000 }), [])
    const outstandingDues = useMemo(() => ({ total: 45000, currentMonth: 12000 }), [])
    const salesPerformance = useMemo(
        () => [
            { month: 'Jan', value: 65 },
            { month: 'Feb', value: 68 },
            { month: 'Mar', value: 72 },
            { month: 'Apr', value: 78 },
            { month: 'May', value: 75 },
            { month: 'Jun', value: 83 },
            { month: 'Jul', value: 88 },
        ],
        [],
    )

    const progressExample = [
        { title: 'Total Sales', value: '₹12,50,000', percent: 75, color: 'success' },
        { title: 'Monthly Growth', value: '18% Increase', percent: 55, color: 'warning' },
        { title: 'Target Achievement', value: '82% Reached', percent: 82, color: 'info' },
    ]

    const conversion = useMemo(() => ({ leadsToCounselling: 28, counsellingToRegistration: 46 }), [])
    const topRecurringCourses = useMemo(
        () => [
            { name: 'React Mastery', sales: 420 },
            { name: 'Fullstack Node', sales: 390 },
            { name: 'Python for Data', sales: 320 },
            { name: 'UI/UX Design', sales: 280 },
            { name: 'Digital Marketing', sales: 250 },
        ],
        [],
    )
    const topLiveCourses = useMemo(
        () => [
            { name: 'React Live Bootcamp', sales: 210 },
            { name: 'Live Node Workshop', sales: 190 },
            { name: 'Data Analytics Live', sales: 160 },
            { name: 'Design Sprint Live', sales: 140 },
            { name: 'Ads & Growth Live', sales: 110 },
        ],
        [],
    )

    useEffect(() => {
        document.documentElement.addEventListener('ColorSchemeChange', () => {
            if (widgetChartRef1.current) {
                setTimeout(() => {
                    widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
                    widgetChartRef1.current.update()
                })
            }
            if (perfChartRef.current) {
                setTimeout(() => {
                    perfChartRef.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
                    perfChartRef.current.update()
                })
            }
        })
    }, [])

    const totalRevenue = revenue.live + revenue.recorded
    const enrollSplitPercent = Math.round((enrollments.live / Math.max(1, enrollments.live + enrollments.recorded)) * 100)
    const perfPercent = useMemo(() => {
        const avg = Math.round(salesPerformance.reduce((s, x) => s + x.value, 0) / salesPerformance.length)
        return Math.min(100, avg)
    }, [salesPerformance])

    const formatCurrency = (num) =>
        num.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })

    const handleOutstandingClick = () => {
        alert(`Outstanding dues details\nTotal: ${formatCurrency(outstandingDues.total)}\nCurrent month: ${formatCurrency(outstandingDues.currentMonth)}`)
    }

    return (
        <>
            <CRow className="mb-3">
                <CCol>
                    <h4 className="card-title mb-0">Dashboard</h4>
                    {/* <CContainer className="p-0" fluid>
                        <AppBreadcrumb />
                    </CContainer> */}
                </CCol>
            </CRow>
            <CRow className="mb-4">
                <CCol sm={12} md={4} className='mb-2 mb-lg-0'>
                    <CCard className="p-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className='fw-bold'>Receipts Awaiting Payment</div>
                            <div className="text-muted small">64 / 105</div>
                        </div>
                        <CProgress thin color="danger" value={(64 / 105) * 100} />
                    </CCard>
                </CCol>

                <CCol sm={12} md={4} className='mb-2 mb-lg-0'>
                    <CCard className="p-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className='fw-bold'>Converted Enquires</div>
                            <div className="text-muted small">225 / 510</div>
                        </div>
                        <CProgress thin color="success" value={(225 / 510) * 100} />
                    </CCard>
                </CCol>

                <CCol sm={12} md={4} className='mb-2 mb-lg-0'>
                    <CCard className="p-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className='fw-bold'>Courses in Progress</div>
                            <div className="text-muted small">110 / 110</div>
                        </div>
                        <CProgress thin color="info" value={(110 / 110) * 100} />
                    </CCard>
                </CCol>
            </CRow>

            <CRow xs={{ gutter: 4 }}>
                <CCol sm={12} md={4} xl={4} xxl={4}>
                    <CWidgetStatsA
                        color="primary"
                        value={
                            <>
                                26K{' '}
                                <span className="fs-6 fw-normal">
                                    (-12.4% <CIcon icon={cilArrowBottom} />)
                                </span>
                            </>
                        }
                        title="Users"
                        action={
                            <CDropdown alignment="end">
                                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                                    <CIcon icon={cilOptions} />
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem>Action</CDropdownItem>
                                    <CDropdownItem>Another action</CDropdownItem>
                                    <CDropdownItem>Something else here...</CDropdownItem>
                                    <CDropdownItem disabled>Disabled action</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        }
                        chart={
                            <CChartLine
                                ref={widgetChartRefTop1}
                                className="mt-3 mx-3"
                                style={{ height: '70px' }}
                                data={{
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                        {
                                            label: 'My First dataset',
                                            backgroundColor: 'transparent',
                                            borderColor: 'rgba(255,255,255,.55)',
                                            pointBackgroundColor: getStyle('--cui-primary'),
                                            data: [65, 59, 84, 84, 51, 55, 40],
                                        },
                                    ],
                                }}
                                options={{
                                    plugins: {
                                        legend: {
                                            display: false,
                                        },
                                    },
                                    maintainAspectRatio: false,
                                    scales: {
                                        x: {
                                            border: {
                                                display: false,
                                            },
                                            grid: {
                                                display: false,
                                                drawBorder: false,
                                            },
                                            ticks: {
                                                display: false,
                                            },
                                        },
                                        y: {
                                            min: 30,
                                            max: 89,
                                            display: false,
                                            grid: {
                                                display: false,
                                            },
                                            ticks: {
                                                display: false,
                                            },
                                        },
                                    },
                                    elements: {
                                        line: {
                                            borderWidth: 1,
                                            tension: 0.4,
                                        },
                                        point: {
                                            radius: 4,
                                            hitRadius: 10,
                                            hoverRadius: 4,
                                        },
                                    },
                                }}
                            />
                        }
                    />
                </CCol>
                <CCol sm={12} md={4} xl={4} xxl={4}>
                    <CWidgetStatsA
                        color="danger"
                        value={
                            <>
                                $6.200{' '}
                                <span className="fs-6 fw-normal">
                                    (40.9% <CIcon icon={cilArrowTop} />)
                                </span>
                            </>
                        }
                        title="Income"
                        action={
                            <CDropdown alignment="end">
                                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                                    <CIcon icon={cilOptions} />
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem>Action</CDropdownItem>
                                    <CDropdownItem>Another action</CDropdownItem>
                                    <CDropdownItem>Something else here...</CDropdownItem>
                                    <CDropdownItem disabled>Disabled action</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        }
                        chart={
                            <CChartLine
                                ref={widgetChartRefTop2}
                                className="mt-3 mx-3"
                                style={{ height: '70px' }}
                                data={{
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                        {
                                            label: 'My First dataset',
                                            backgroundColor: 'transparent',
                                            borderColor: 'rgba(255,255,255,.55)',
                                            pointBackgroundColor: getStyle('--cui-danger'),
                                            data: [1, 18, 9, 17, 34, 22, 11],
                                        },
                                    ],
                                }}
                                options={{
                                    plugins: {
                                        legend: {
                                            display: false,
                                        },
                                    },
                                    maintainAspectRatio: false,
                                    scales: {
                                        x: {
                                            border: {
                                                display: false,
                                            },
                                            grid: {
                                                display: false,
                                                drawBorder: false,
                                            },
                                            ticks: {
                                                display: false,
                                            },
                                        },
                                        y: {
                                            min: -9,
                                            max: 39,
                                            display: false,
                                            grid: {
                                                display: false,
                                            },
                                            ticks: {
                                                display: false,
                                            },
                                        },
                                    },
                                    elements: {
                                        line: {
                                            borderWidth: 1,
                                        },
                                        point: {
                                            radius: 4,
                                            hitRadius: 10,
                                            hoverRadius: 4,
                                        },
                                    },
                                }}
                            />
                        }
                    />
                </CCol>
                <CCol sm={12} md={4} xl={4} xxl={4}>
                    <CWidgetStatsA
                        color="warning"
                        value={
                            <>
                                44K{' '}
                                <span className="fs-6 fw-normal">
                                    (-23.6% <CIcon icon={cilArrowBottom} />)
                                </span>
                            </>
                        }
                        title="Sessions"
                        action={
                            <CDropdown alignment="end">
                                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                                    <CIcon icon={cilOptions} />
                                </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem>Action</CDropdownItem>
                                    <CDropdownItem>Another action</CDropdownItem>
                                    <CDropdownItem>Something else here...</CDropdownItem>
                                    <CDropdownItem disabled>Disabled action</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        }
                        chart={
                            <CChartBar
                                className="mt-3 mx-3"
                                style={{ height: '70px' }}
                                data={{
                                    labels: [
                                        'January',
                                        'February',
                                        'March',
                                        'April',
                                        'May',
                                        'June',
                                        'July',
                                        'August',
                                        'September',
                                        'October',
                                        'November',
                                        'December',
                                        'January',
                                        'February',
                                        'March',
                                        'April',
                                    ],
                                    datasets: [
                                        {
                                            label: 'My First dataset',
                                            backgroundColor: 'rgba(255,255,255,.2)',
                                            borderColor: 'rgba(255,255,255,.55)',
                                            data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                                            barPercentage: 0.6,
                                        },
                                    ],
                                }}
                                options={{
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            display: false,
                                        },
                                    },
                                    scales: {
                                        x: {
                                            grid: {
                                                display: false,
                                                drawTicks: false,
                                            },
                                            ticks: {
                                                display: false,
                                            },
                                        },
                                        y: {
                                            border: {
                                                display: false,
                                            },
                                            grid: {
                                                display: false,
                                                drawBorder: false,
                                                drawTicks: false,
                                            },
                                            ticks: {
                                                display: false,
                                            },
                                        },
                                    },
                                }}
                            />
                        }
                    />
                </CCol>
            </CRow>
            {/* Top Row */}
            <CRow className="my-4">
                {/* Lead Source */}
                <CCol sm={12} md={6} xl={4} xxl={4} className='mb-4 mb-lg-0 mb-md-0'>
                    <CCard>
                        <CCardHeader className='bg-white fw-bold border-0'>
                            <h4 className="mb-0 text-black">Lead Source Distribution</h4>
                        </CCardHeader>
                        <CCardBody>
                            <CChartDoughnut
                                className='d-flex justify-content-center'
                                style={{ height: '270px' }}
                                options={{ radius: 100 }}
                                data={leadSource}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>

                {/* Lead Count */}
                <CCol sm={12} md={6} xl={8} xxl={8}>
                    <CWidgetStatsA
                        color="success"
                        className='chart_list mb-4'
                        value={
                            <div>
                                430{' '}
                                <span className="fs-6 fw-normal">
                                    (+8.2% <CIcon icon={cilArrowBottom} />)
                                </span>
                            </div>
                        }
                        title="Lead Count"
                        action={
                            <div className='p-0'>
                                <CIcon
                                    icon={cilCalendar}
                                    className="text-white"
                                    size="lg"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setShowPicker(!showPicker)}
                                />
                                {showPicker && (
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => {
                                            // onChange(date)
                                            setShowPicker(false)
                                        }}
                                        inline
                                        popperPlacement="bottom-end"
                                    />
                                )}
                            </div>
                        }

                        chart={
                            <CChartLine
                                ref={widgetChartRef1}
                                className="mt-3 mx-3"
                                style={{ height: '310px' }}
                                data={{
                                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                                    datasets: [
                                        {
                                            label: 'Lead Count Trend',
                                            backgroundColor: 'transparent',
                                            borderColor: 'rgba(255,255,255,.55)',
                                            pointBackgroundColor: getStyle('--cui-success'),
                                            data: [65, 90, 75, 110, 98, 120, 140],
                                        },
                                    ],
                                }}
                                options={{
                                    plugins: { legend: { display: false } },
                                    maintainAspectRatio: false,
                                    scales: {
                                        x: {
                                            border: { display: false },
                                            grid: { display: false, drawBorder: false },
                                            ticks: { display: false },
                                        },
                                        y: {
                                            min: 30,
                                            max: 150,
                                            display: false,
                                            grid: { display: false },
                                            ticks: { display: false },
                                        },
                                    },
                                    elements: {
                                        line: { borderWidth: 1, tension: 0.4 },
                                        point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
                                    },
                                }}
                            />
                        }
                    />
                </CCol>

                <CCol sm={12}>
                    <CRow>
                        <CCol sm={12} xl={7} xxl={7}>
                            <CRow>
                                {/* Revenue */}
                                <CCol sm={12} md={6} xl={6} xxl={6} className='mb-4 mb-md-0 mb-lg-0'>
                                    <CCard className="my-4">
                                        <CCardHeader className="bg-white fw-bold text-black">Revenue (Live + Recorded)</CCardHeader>
                                        <CCardBody>
                                            <div className="fs-5 fw-semibold">{formatCurrency(totalRevenue)}</div>
                                            <div className="small text-body-secondary mt-2">
                                                Live {formatCurrency(revenue.live)} • Recorded {formatCurrency(revenue.recorded)}
                                            </div>
                                        </CCardBody>
                                        <CCardFooter className="d-flex justify-content-between align-items-center">
                                            <div className="small text-body-secondary">Period: This month (demo)</div>
                                            <CButton color="link" size="sm">Export</CButton>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                                {/* Outstanding dues */}
                                <CCol sm={12} md={6} xl={6} xxl={6}>
                                    <CCard className="my-4" style={{ cursor: 'pointer' }} onClick={handleOutstandingClick}>
                                        <CCardHeader className="bg-white fw-bold text-black">Outstanding Dues</CCardHeader>
                                        <CCardBody>
                                            <div className="fw-semibold">{formatCurrency(outstandingDues.total)}</div>
                                            <div className="small text-body-secondary mt-1">
                                                Current month: {formatCurrency(outstandingDues.currentMonth)}
                                            </div>
                                            <div className="mt-2 small text-body-secondary">(Click for in-depth)</div>
                                        </CCardBody>
                                    </CCard>
                                </CCol>
                                {/* Enrollments */}
                                <CCol sm={12} className='mt-4 mb-4 mb-lg-0'>
                                    <CCard className="my-4">
                                        <CCardHeader className="bg-white fw-bold text-black">Enrollments</CCardHeader>
                                        <CCardBody>
                                            <div className="d-flex justify-content-between mb-2">
                                                <div>
                                                    <div className="text-body-secondary small">Live</div>
                                                    <div className="fw-semibold">{enrollments.live}</div>
                                                </div>
                                                <div>
                                                    <div className="text-body-secondary small">Recorded</div>
                                                    <div className="fw-semibold">{enrollments.recorded}</div>
                                                </div>
                                            </div>
                                            <div className="small text-body-secondary mb-2">Split</div>
                                            <CProgress thin value={enrollSplitPercent} />
                                            <div className="small text-body-secondary mt-2">Live {enrollSplitPercent}%</div>
                                        </CCardBody>
                                        <CCardFooter className="text-body-secondary small">
                                            Total Enrollments: {enrollments.live + enrollments.recorded}
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </CCol>
                        <CCol sm={12} xl={5} xxl={5}>
                            {/* Leads Overview - NEW RADIAL GAUGES */}
                            <CCard className="my-4">
                                <CCardHeader className="bg-white fw-bold border-0 text-black">
                                    Leads Overview
                                </CCardHeader>

                                <CCardBody>

                                    {/* Doughnut Chart */}
                                    <div className="d-flex justify-content-center my-4" style={{ height: "350px" }}>
                                        <CChartDoughnut
                                            style={{ height: "100%" }}
                                            data={{
                                                labels: ["Ready to Convert", "Considering", "Cold Leads"],
                                                datasets: [
                                                    {
                                                        data: [
                                                            leadsOverview.hot,
                                                            leadsOverview.warm,
                                                            leadsOverview.cold
                                                        ],
                                                        backgroundColor: ["#FF4D4D", "#FFA726", "#42A5F5"],
                                                        borderWidth: 0,
                                                        cutout: "50%",       // thinner donut ring
                                                    },
                                                ],
                                            }}
                                            options={{
                                                plugins: {
                                                    legend: {
                                                        position: "bottom",
                                                        labels: {
                                                            boxWidth: 12,
                                                            padding: 16,
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </CCol>

                <CCol sm={12} className='mt-4'>
                    <CCard className="my-4">
                        <CCardBody>
                            <CRow className="align-items-center my-3">
                                <CCol sm={12} xl={6}>
                                    <h4 className="mb-0 text-black">Overall Sales Performance</h4>
                                    <div className="small text-body-secondary">
                                        January – December {new Date().getFullYear()}
                                    </div>
                                </CCol>
                                <CCol sm={12} xl={6} className="d-none d-md-block">
                                    <CButton color="primary" className="float-end">
                                        <CIcon icon={cilCloudDownload} />
                                    </CButton>
                                    <CButtonGroup className="float-end me-3">
                                        {['Day', 'Month', 'Year'].map((value) => (
                                            <CButton
                                                color="outline-secondary"
                                                key={value}
                                                className="mx-0"
                                                active={value === 'Month'}
                                            >
                                                {value}
                                            </CButton>
                                        ))}
                                    </CButtonGroup>
                                </CCol>
                            </CRow>
                            {/* Main chart showing overall sales trend */}
                            <MainChart />
                        </CCardBody>

                        <CCardFooter>
                            <CRow
                                xs={{ cols: 1, gutter: 4 }}
                                sm={{ cols: 2 }}
                                lg={{ cols: 3 }}
                                className="mb-2 text-center"
                            >
                                {progressExample.map((item, index) => (
                                    <CCol
                                        key={index}
                                        className={classNames({
                                            'd-none d-lg-block': index + 1 > progressExample.length,
                                        })}
                                    >
                                        <div className="text-body-secondary">{item.title}</div>
                                        <div className="fw-semibold text-truncate">
                                            {item.value} ({item.percent}%)
                                        </div>
                                        <CProgress thin className="mt-2" color={item.color} value={item.percent} />
                                    </CCol>
                                ))}
                            </CRow>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>

            {/* THIRD ROW */}
            <CRow className="my-4">
                {/* Conversion */}
                <CCol sm={12} md={6} xl={4} className='mb-4 mb-lg-0'>
                    <CCard className="my-3">
                        <CCardHeader className="bg-white fw-bold text-black">Conversion</CCardHeader>
                        <CCardBody>
                            <div className="my-3">
                                <div className="text-body-secondary small">Leads → Counselling</div>
                                <div className="d-flex justify-content-between">
                                    <div className="fw-semibold">{conversion.leadsToCounselling}%</div>
                                    <div className="small text-body-secondary">of leads</div>
                                </div>
                                <CProgress thin value={conversion.leadsToCounselling} className="mt-2" />
                            </div>

                            <div>
                                <div className="text-body-secondary small">Counselling → Registration</div>
                                <div className="d-flex justify-content-between">
                                    <div className="fw-semibold">{conversion.counsellingToRegistration}%</div>
                                    <div className="small text-body-secondary">of counselled</div>
                                </div>
                                <CProgress thin color="success" value={conversion.counsellingToRegistration} className="mt-2" />
                            </div>
                        </CCardBody>
                        <CCardFooter className="small text-body-secondary">Conversion efficiency</CCardFooter>
                    </CCard>
                </CCol>

                {/* Recurring */}
                <CCol sm={12} md={6} xl={4} className='mb-4 mb-lg-0'>
                    <CCard className="my-3">
                        <CCardHeader className="bg-white fw-bold text-black">Top 5 Recurring Course Sales</CCardHeader>
                        <CCardBody>
                            <CListGroup flush>
                                {topRecurringCourses.map((c, idx) => (
                                    <CListGroupItem key={idx} className="d-flex justify-content-between align-items-center">
                                        <div>{idx + 1}. {c.name}</div>
                                        <CBadge color="primary" shape="rounded-pill">{c.sales}</CBadge>
                                    </CListGroupItem>
                                ))}
                            </CListGroup>
                        </CCardBody>
                        <CCardFooter className="small text-body-secondary">Recurring revenue leaders</CCardFooter>
                    </CCard>
                </CCol>

                {/* Live */}
                <CCol sm={12} md={12} xl={4} className='mb-4 mb-lg-0'>
                    <CCard className="my-3">
                        <CCardHeader className="bg-white fw-bold text-black">Top 5 Live Course Sales</CCardHeader>
                        <CCardBody>
                            <CListGroup flush>
                                {topLiveCourses.map((c, idx) => (
                                    <CListGroupItem key={idx} className="d-flex justify-content-between align-items-center">
                                        <div>{idx + 1}. {c.name}</div>
                                        <CBadge color="info" shape="rounded-pill">{c.sales}</CBadge>
                                    </CListGroupItem>
                                ))}
                            </CListGroup>
                        </CCardBody>
                        <CCardFooter className="small text-body-secondary">Live session leaders</CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Dashboard
