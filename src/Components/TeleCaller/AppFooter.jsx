import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4 py-3 border-top d-flex justify-content-lg-between justify-content-center align-items-center">
      {/* Left side: Copyright */}
      <div>
        <span className="me-1">&copy; 2025 VeLearn.</span>
        <span>All rights reserved.</span>
      </div>

      {/* Right side: Designed & Powered by */}
      <div>
        <span className="me-1">Designed &amp; Developed by</span>
        <a
          href="https://findwaydigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none fw-semibold"
        >
          FindWay Digital
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
