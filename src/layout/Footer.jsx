import React from "react";

function Footer() {
  return (
  <footer className="text-center py-4 mt-5 shadow-lg">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-2 mb-md-0">
            <span className="fw-bold">My Product Store &copy; 2025 </span> 
          </div>
          <div>
            <a href="https://github.com/" target="_blank"
             className="text-white mx-2 text-decoration-none">
              <i className="bi bi-github"></i> GitHub
            </a>
            <a href="https://sahilprotfolio.netlify.app/" target="_blank" className="text-white mx-2 text-decoration-none">
              <i className="bi bi-envelope"></i> Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
