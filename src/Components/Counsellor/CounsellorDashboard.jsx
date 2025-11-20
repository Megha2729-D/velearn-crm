import { useState } from "react";
import {
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardHeader,
} from "@coreui/react";
import { CChartDoughnut } from "@coreui/react-chartjs";


const CounsellorDashboard = () => {
    return (
        <>
            <CRow className="mb-3">
                <CCol>
                    <h4 className="card-title mb-0">Dashboard</h4>
                </CCol>
            </CRow>
            <div className="col-12">
                <CRow className="w-100 m-auto">
                    <CCard className="my-4 p-0">
                        <CCardHeader className="w-100 d-flex justify-content-between align-items-center">
                            <h5 className="w-auto m-0">Today's Lead & Appointment Status</h5>
                        </CCardHeader>

                        <CCardBody>
                            <CRow>
                                {/* FIXED PENDING APPOINTMENTS */}
                                <CCol sm={12} md={6}>
                                    <div className="text-center d-flex flex-column justify-content-center align-items-center mb-4">
                                        <CChartDoughnut
                                            data={{
                                                labels: ["Completed", "Pending"],
                                                datasets: [
                                                    {
                                                        data: [8, 20 - 8],
                                                        backgroundColor: ["#4e73df", "#e4e4e4"],
                                                        hoverBackgroundColor: ["#4e73df", "#d4d4d4"],
                                                    },
                                                ],
                                            }}
                                            options={{
                                                circumference: 180,
                                                rotation: -90,
                                                cutout: "70%",
                                                plugins: {
                                                    legend: { display: false },
                                                },
                                            }}
                                            style={{ height: "200px" }}
                                        />

                                        <h6 className="fw-bold mt-2">Fixed Pending Appointments</h6>

                                        {/* Progress Bar */}
                                        <div className="w-75 mt-2">
                                            <div className="progress" style={{ height: "6px" }}>
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style={{ width: `${(8 / 20) * 100}%` }}
                                                ></div>
                                            </div>

                                            {/* Counts */}
                                            <div className="d-flex justify-content-between mt-2 small text-muted">
                                                <span>Completed: 8</span>
                                                <span>Pending: {20 - 8}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CCol>

                                {/* PENDING NEW LEADS */}
                                <CCol sm={12} md={6}>
                                    <div className="text-center d-flex flex-column justify-content-center align-items-center mb-4">
                                        <CChartDoughnut
                                            data={{
                                                labels: ["Completed", "Pending"],
                                                datasets: [
                                                    {
                                                        data: [14, 20 - 14],
                                                        backgroundColor: ["#f6c23e", "#e4e4e4"],
                                                        hoverBackgroundColor: ["#f6c23e", "#d4d4d4"],
                                                    },
                                                ],
                                            }}
                                            options={{
                                                circumference: 180,
                                                rotation: -90,
                                                cutout: "70%",
                                                plugins: {
                                                    legend: { display: false },
                                                },
                                            }}
                                            style={{ height: "200px" }}
                                        />

                                        <h6 className="fw-bold mt-2">Pending New Leads</h6>

                                        {/* Progress Bar */}
                                        <div className="w-75 mt-2">
                                            <div className="progress" style={{ height: "6px" }}>
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{ width: `${(14 / 20) * 100}%` }}
                                                ></div>
                                            </div>

                                            {/* Counts */}
                                            <div className="d-flex justify-content-between mt-2 small text-muted">
                                                <span>Completed: 14</span>
                                                <span>Pending: {20 - 14}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CRow>
            </div>
        </>
    );
};

export default CounsellorDashboard;
