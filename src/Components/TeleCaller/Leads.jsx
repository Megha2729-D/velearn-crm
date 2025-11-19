import { Link } from "react-router-dom";
import {
    CCard,
    CCardHeader,
    CCardBody,
    CButton,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CAvatar,
    CFormInput,
    CRow,
    CCol,
    CFormSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPeople } from "@coreui/icons";
import { useState, useEffect } from "react";

const Leads = () => {
    const leadsData = [
        {
            avatar: { src: '/assets/images/avatars/1.jpg', status: 'danger' },
            date: "11-02-2025",
            name: "Megha Sharma",
            email: "megha@example.com",
            phone: "+91 8887776665",
            source: "Google Ads",
            course: "UI/UX Design",
            tag: "Hot",
            timeline: [
                { date: "10-02-2025", remark: "Very Interested – Send brochure" },
            ],
        },
        {
            avatar: { src: '/assets/images/avatars/2.jpg', status: 'warning' },
            date: "10-02-2025",
            name: "John Doe",
            email: "john@example.com",
            phone: "+91 9876543210",
            source: "Facebook Ads",
            course: "React Development",
            tag: "Warm",
            timeline: [
                { date: "08-02-2025", remark: "Called – Not reachable" },
                { date: "07-02-2025", remark: "Follow-up scheduled" },
            ],
        },
        {
            avatar: { src: '/assets/images/avatars/3.jpg', status: 'secondary' },
            date: "09-02-2025",
            name: "Priya Nair",
            email: "priya.nair@example.com",
            phone: "+91 9567843210",
            source: "Instagram DM",
            course: "Digital Marketing",
            tag: "Cold",
            timeline: [
                { date: "08-02-2025", remark: "Requested course details" },
            ],
        },
        {
            avatar: { src: '/assets/images/avatars/4.jpg', status: 'warning' },
            date: "09-02-2025",
            name: "Suresh Kumar",
            email: "suresh.k@example.com",
            phone: "+91 9098765432",
            source: "Website Form",
            course: "Full Stack Development",
            tag: "Warm",
            timeline: [
                { date: "09-02-2025", remark: "Asked about fees – Follow up tomorrow" },
            ],
        },
        {
            avatar: { src: '/assets/images/avatars/5.jpg', status: 'danger' },
            date: "08-02-2025",
            name: "Ananya Verma",
            email: "ananya.verma@example.com",
            phone: "+91 9123456780",
            source: "Referral",
            course: "Graphics Design",
            tag: "Hot",
            timeline: [
                { date: "08-02-2025", remark: "Highly interested – Send portfolio samples" },
            ],
        },
        {
            avatar: { src: '/assets/images/avatars/6.jpg', status: 'secondary' },
            date: "07-02-2025",
            name: "Rahul Singh",
            email: "rahul.singh@example.com",
            phone: "+91 9001122334",
            source: "Google Ads",
            course: "Python Programming",
            tag: "Cold",
            timeline: [
                { date: "06-02-2025", remark: "Not interested currently" },
            ],
        },
        {
            avatar: { src: '/assets/images/avatars/1.jpg', status: 'warning' },
            date: "07-02-2025",
            name: "Divya Menon",
            email: "divya.m@example.com",
            phone: "+91 9812345678",
            source: "LinkedIn Outreach",
            course: "Business Analytics",
            tag: "Warm",
            timeline: [
                { date: "07-02-2025", remark: "Requested syllabus PDF" },
                { date: "06-02-2025", remark: "Initial call completed" },
            ],
        },
    ];

    // -------------------------------
    // STATE FOR SEARCH + FILTER + PAGINATION
    // -------------------------------
    const [search, setSearch] = useState("");
    const [tagFilter, setTagFilter] = useState("");
    const [sourceFilter, setSourceFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 991);
    const itemsPerPage = 5;

    // Handle window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 991);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const filteredLeads = leadsData.filter(
        (lead) =>
            (lead.name.toLowerCase().includes(search.toLowerCase()) ||
                lead.email.toLowerCase().includes(search.toLowerCase()) ||
                lead.phone.includes(search)) &&
            (tagFilter ? lead.tag === tagFilter : true) &&
            (sourceFilter ? lead.source === sourceFilter : true)
    );

    const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
    const paginatedLeads = filteredLeads.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="col-12">
            <CCard className="mb-4">
                {/* HEADER */}
                <CCardHeader className="w-100 d-flex justify-content-between flex-column flex-lg-row align-items-start align-items-lg-center">

                    <CRow className="align-items-center w-100 m-auto">
                        <CCol sm={6} md={6} xl={2} className="my-2">
                            <h5 className="m-0 text-start">Leads List</h5>
                        </CCol>
                        <CCol sm={12} md={12} xl={2} className="text-end my-2 d-block d-lg-none">
                            <Link to={'/tele-caller/add-leads'}>
                                <CButton color="primary">+ Add New Lead</CButton>
                            </Link>
                        </CCol>
                        <CCol sm={6} md={6} xl={4} className="my-2">
                            <CFormInput
                                placeholder="Search name, email, phone..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </CCol>
                        <CCol sm={12} md={12} xl={2} className="my-2">
                            <CFormSelect value={tagFilter} onChange={(e) => setTagFilter(e.target.value)}>
                                <option value="">Filter by Tag</option>
                                <option value="Hot">Hot</option>
                                <option value="Warm">Warm</option>
                                <option value="Cold">Cold</option>
                            </CFormSelect>
                        </CCol>
                        <CCol sm={12} md={12} xl={2} className="my-2">
                            <CFormSelect
                                value={sourceFilter}
                                onChange={(e) => setSourceFilter(e.target.value)}
                            >
                                <option value="">Filter by Source</option>
                                <option value="Google Ads">Google Ads</option>
                                <option value="Facebook Ads">Facebook Ads</option>
                                <option value="Instagram DM">Instagram DM</option>
                                <option value="Website Form">Website Form</option>
                                <option value="Referral">Referral</option>
                                <option value="LinkedIn Outreach">LinkedIn Outreach</option>
                            </CFormSelect>
                        </CCol>
                        <CCol sm={12} md={12} xl={2} className="text-end my-2 d-none d-lg-block">
                            <Link to={'/tele-caller/add-leads'}>
                                <CButton color="primary">+ Add New Lead</CButton>
                            </Link>
                        </CCol>
                    </CRow>
                </CCardHeader>

                <CCardBody>
                    {/* TABLE FOR DESKTOP */}
                    {!isMobile && (
                        <CTable className="mb-0 border" hover responsive>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell className="text-center">
                                        <CIcon icon={cilPeople} />
                                    </CTableHeaderCell>
                                    <CTableHeaderCell>User</CTableHeaderCell>
                                    <CTableHeaderCell>Email</CTableHeaderCell>
                                    <CTableHeaderCell>Phone No</CTableHeaderCell>
                                    <CTableHeaderCell>Source</CTableHeaderCell>
                                    <CTableHeaderCell>Course</CTableHeaderCell>
                                    <CTableHeaderCell>Tag</CTableHeaderCell>
                                    <CTableHeaderCell style={{ width: "200px" }}>Timeline / Remarks</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>

                            <CTableBody>
                                {paginatedLeads.map((lead, idx) => (
                                    <CTableRow key={idx}>
                                        <CTableDataCell className="text-center">
                                            <CAvatar size="md" src={lead.avatar.src} status={lead.avatar.status} />
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {lead.name}
                                            <br />
                                            <small className="text-body-secondary">{lead.date}</small>
                                        </CTableDataCell>
                                        <CTableDataCell>{lead.email}</CTableDataCell>
                                        <CTableDataCell>{lead.phone}</CTableDataCell>
                                        <CTableDataCell>{lead.source}</CTableDataCell>
                                        <CTableDataCell>{lead.course}</CTableDataCell>
                                        <CTableDataCell>
                                            <span
                                                className={`badge text-bg-${lead.tag === "Hot"
                                                    ? "danger"
                                                    : lead.tag === "Warm"
                                                        ? "warning"
                                                        : "secondary"
                                                    }`}
                                            >
                                                {lead.tag}
                                            </span>
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {lead.timeline.map((item, tIdx) => (
                                                <div key={tIdx} className="mb-1">
                                                    <strong>{item.date}:</strong>
                                                    <br />
                                                    {item.remark}
                                                </div>
                                            ))}
                                            <CButton size="sm" color="info" variant="outline">
                                                + Add Remark
                                            </CButton>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    )}

                    {/* CARD VIEW FOR MOBILE */}
                    {isMobile &&
                        paginatedLeads.map((lead, idx) => (
                            <CCard className="mb-3" key={idx}>
                                <CCardBody>
                                    <div className="d-flex align-items-center mb-2">
                                        <CAvatar src={lead.avatar.src} status={lead.avatar.status} />
                                        <div className="ms-2">
                                            <strong>{lead.name}</strong>
                                            <br />
                                            <small className="text-body-secondary">{lead.date}</small>
                                        </div>
                                    </div>
                                    <div className="my-1">
                                        <strong>Email:</strong> {lead.email}
                                    </div>
                                    <div className="my-1">
                                        <strong>Phone:</strong> {lead.phone}
                                    </div>
                                    <div className="my-1">
                                        <strong>Source:</strong> {lead.source}
                                    </div>
                                    <div className="my-1">
                                        <strong>Course:</strong> {lead.course}
                                    </div>
                                    <div className="my-1">
                                        <strong>Tag:</strong>{" "}
                                        <span
                                            className={`badge text-bg-${lead.tag === "Hot"
                                                ? "danger"
                                                : lead.tag === "Warm"
                                                    ? "warning"
                                                    : "secondary"
                                                }`}
                                        >
                                            {lead.tag}
                                        </span>
                                    </div>
                                    <div className="mt-2">
                                        <strong>Timeline / Remarks:</strong>
                                        {lead.timeline.map((item, tIdx) => (
                                            <div key={tIdx}>
                                                <small>
                                                    {item.date}: {item.remark}
                                                </small>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-2 text-end">
                                        <CButton size="sm" color="info" variant="outline">
                                            + Add Remark
                                        </CButton>
                                    </div>
                                </CCardBody>
                            </CCard>
                        ))}

                    {/* PAGINATION */}
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                            Showing {paginatedLeads.length} of {filteredLeads.length} leads
                        </div>
                        <div className="d-flex gap-2">
                            <CButton
                                color="secondary"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((p) => p - 1)}
                            >
                                Previous
                            </CButton>
                            <CButton
                                color="secondary"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((p) => p + 1)}
                            >
                                Next
                            </CButton>
                        </div>
                    </div>
                </CCardBody>
            </CCard>
        </div>
    );
};

export default Leads;
