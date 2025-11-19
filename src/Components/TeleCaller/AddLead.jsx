import React, { useState } from 'react'
import {
    CCol,
    CRow,
    CCard,
    CCardBody,
    CCardHeader,
    CForm,
    CFormInput,
    CFormSelect,
    CButton,
    CFormTextarea,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'

const AddLeads = () => {
    const [leadData, setLeadData] = useState({
        name: '',
        email: '',
        phone: '',
        source: '',
        course: '',
        tag: '',
        timelineDate: '',
        timelineRemark: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLeadData({ ...leadData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Lead submitted:', leadData)
        // Here you can send leadData to backend API
        alert('Lead submitted successfully!')
        setLeadData({
            name: '',
            email: '',
            phone: '',
            source: '',
            course: '',
            tag: '',
            timelineDate: '',
            timelineRemark: '',
        })
    }

    return (
        <CCard className="mb-4">
            <CCardHeader>
                <CIcon icon={cilPeople} className="me-2" />
                Add New Lead
            </CCardHeader>
            <CCardBody>
                <CForm onSubmit={handleSubmit}>
                    <CRow className="g-3">
                        <CCol md={4}>
                            <div className="form-item">
                                <input type="text" label="Name"
                                    name="name"
                                    value={leadData.name}
                                    onChange={handleChange}
                                    required
                                    className="form_fields"
                                    autocomplete="off"
                                    ondrop="return false;" onpaste="return false;" />
                                <label for="phone">Name</label>
                                <p className="error-msg"></p>
                            </div>
                        </CCol>
                        <CCol md={4}>
                            <div className="form-item">
                                <input type="email" label="Email"
                                    name="email"
                                    value={leadData.email}
                                    onChange={handleChange}
                                    required
                                    className="form_fields"
                                    autocomplete="off"
                                    ondrop="return false;" onpaste="return false;" />
                                <label for="phone">Email Id</label>
                                <p className="error-msg"></p>
                            </div>
                        </CCol>

                        <CCol md={4}>
                            <div className="form-item">
                                <input type="number" label="Phone Number"
                                    name="phone"
                                    value={leadData.phone}
                                    onChange={handleChange}
                                    required
                                    className="form_fields"
                                    autocomplete="off"
                                    ondrop="return false;" onpaste="return false;" />
                                <label for="phone">Mobile Number</label>
                                <p className="error-msg"></p>
                            </div>
                        </CCol>

                        <CCol md={6}>
                            <div className="form-item">
                                <select className="form-select form_fields"
                                    value={leadData.source}
                                    name="source"
                                    label="Source"
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" selected disabled></option>
                                    <option value="Google Ads">Google Ads</option>
                                    <option value="Facebook Ads">Facebook Ads</option>
                                    <option value="Instagram DM">Instagram DM</option>
                                    <option value="Website Form">Website Form</option>
                                    <option value="Referral">Referral</option>
                                    <option value="LinkedIn Outreach">LinkedIn Outreach</option>
                                </select>
                                <label for="service">Select Source</label>
                                <p className="error-msg"></p>
                            </div>
                        </CCol>

                        <CCol md={6}>
                            <div className="form-item">
                                <input type="number" label="Course"
                                    name="course"
                                    value={leadData.course}
                                    onChange={handleChange}
                                    required
                                    className="form_fields"
                                    autocomplete="off"
                                    ondrop="return false;" onpaste="return false;" />
                                <label for="course">Course</label>
                                <p className="error-msg"></p>
                            </div>
                        </CCol>

                        <CCol md={6}>
                            <div className="form-item">
                                <select className="form-select form_fields"
                                    value={leadData.tag}
                                    name="tag"
                                    label="Tag"
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" selected disabled></option>
                                    <option value="Hot">Hot</option>
                                    <option value="Warm">Warm</option>
                                    <option value="Cold">Cold</option>
                                </select>
                                <label for="service">Select Tag</label>
                                <p className="error-msg"></p>
                            </div>
                        </CCol>

                        <CCol md={6}>
                            <div className="form-item">
                                <input type="date" label="Timeline Date"
                                    name="timelineDate"
                                    value={leadData.timelineDate}
                                    onChange={handleChange}
                                    required
                                    className="form_fields"
                                    autocomplete="off"
                                    ondrop="return false;" onpaste="return false;" />
                                <label for="timelineDate">Timeline Date</label>
                                <p className="error-msg"></p>
                            </div>
                        </CCol>

                        <CCol md={12}>
                            <div className="form-item">
                                <textarea className="form_fields"
                                    label="Timeline Remark"
                                    name="timelineRemark"
                                    id="timelineRemark"
                                    autocomplete="off"
                                    ondrop="return false;"
                                    onpaste="return false;"></textarea>
                                <label for="timelineRemark">Address</label>
                                <p className="error-msg"></p>
                            </div>
                        </CCol>
                    </CRow>

                    <div className="mt-3">
                        <CButton type="submit" color="primary">
                            Submit Lead
                        </CButton>
                    </div>
                </CForm>

            </CCardBody>
        </CCard>
    )

}

export default AddLeads
