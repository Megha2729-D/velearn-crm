import React, { useState, useEffect } from "react";
import {
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardHeader,
    CFormSelect,
    CProgress,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";

const TeleDashboard = () => {
    // Date Filter
    const [dateRange, setDateRange] = useState("today");

    // Lead Summary Data (replace with API)
    const leadData = {
        today: { new: 12, contacted: 30, hot: 8, warm: 15, cold: 7 },
        week: { new: 40, contacted: 134, hot: 22, warm: 51, cold: 20 },
        month: { new: 110, contacted: 410, hot: 70, warm: 160, cold: 80 },
    };
    const current = leadData[dateRange];

    // total leads for progress %
    const totalLeads =
        current.new +
        current.contacted +
        current.hot +
        current.warm +
        current.cold;

    // Performance (dummy %)
    const performance = {
        new: "+12%",
        contacted: "-4%",
        hot: "+8%",
        warm: "+3%",
        cold: "-2%",
    };

    return (
        <>
            <CRow className="mb-3">
                <CCol>
                    <h4 className="card-title mb-0">Dashboard</h4>
                </CCol>
            </CRow>
            <div className="col-12">
                <CRow className="w-100 m-auto">
                    <CCard className="mt-4 p-0">
                        <CCardHeader className="w-100 d-flex justify-content-between align-items-center">
                            <h5 className="w-auto m-0">Leads Overview</h5>
                            <CFormSelect
                                style={{ width: 'auto' }}
                                value={dateRange}
                                onChange={(e) => setDateRange(e.target.value)}
                            >
                                <option value="today">Today</option>
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                            </CFormSelect>
                        </CCardHeader>
                        <CCardBody>
                            {/* Lead Summary */}
                            <CRow className="mb-4">
                                {[
                                    { label: "New Leads", key: "new", color: "primary" },
                                    { label: "Contacted", key: "contacted", color: "success" },
                                    { label: "Hot Leads", key: "hot", color: "danger" },
                                    { label: "Warm Leads", key: "warm", color: "warning" },
                                    { label: "Cold Leads", key: "cold", color: "secondary" },
                                ].map((item, idx) => (
                                    <CCol sm={12} md={4} lg={4} xl={4} className="mb-3" key={idx}>
                                        <div className="p-3 bg-light rounded border">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div className="fw-bold">{item.label}</div>

                                                {/* Count + Performance */}
                                                <div className="text-end">
                                                    <div className="fw-bold">
                                                        {current[item.key]}
                                                    </div>
                                                    <small
                                                        className="text-muted"
                                                        style={{
                                                            color: performance[item.key].includes("+")
                                                                ? "green"
                                                                : "red",
                                                        }}
                                                    >
                                                        {performance[item.key]} Performance
                                                    </small>
                                                </div>
                                            </div>

                                            {/* Progress bar based on percentage contribution */}
                                            <CProgress
                                                thin
                                                color={item.color}
                                                value={(current[item.key] / totalLeads) * 100}
                                            />
                                        </div>
                                    </CCol>
                                ))}
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CRow>
            </div>
            <div className="col-12">
                <CRow className="w-100 m-auto">
                    <CCard className="my-4 p-0">
                        <CCardHeader className="w-100 d-flex justify-content-between align-items-center">
                            <h5 className="w-auto m-0">Leads Performance Trend</h5>
                        </CCardHeader>
                        <CCardBody>
                            <CChartLine
                                style={{ height: '100%', width: '100%' }}
                                data={{
                                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                                    datasets: [
                                        {
                                            label: "New",
                                            data: [4, 5, 3, 6, 7, 2, 4],
                                            tension: 0.4,
                                        },
                                        {
                                            label: "Contacted",
                                            data: [12, 15, 20, 19, 30, 25, 13],
                                            tension: 0.4,
                                        },
                                        {
                                            label: "Hot",
                                            data: [1, 3, 2, 4, 6, 5, 3],
                                            tension: 0.4,
                                        },
                                        {
                                            label: "Warm",
                                            data: [5, 7, 8, 6, 9, 10, 8],
                                            tension: 0.4,
                                        },
                                        {
                                            label: "Cold",
                                            data: [2, 3, 4, 3, 5, 2, 4],
                                            tension: 0.4,
                                        },
                                    ],
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CRow>
            </div>
        </>
    );
};

export default TeleDashboard;
