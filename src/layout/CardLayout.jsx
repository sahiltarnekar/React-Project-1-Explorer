import React from "react";
import reactLogo from "../assets/react.svg";

function CardLayout({ product }) {
  return (
    <div className="col-md-4 mb-4 d-flex align-items-stretch">
      <div className="card shadow-lg h-100 border-0">
        <img
          src={product.img || reactLogo}
          className="card-img-top p-3 rounded"
          alt={product.name}
          style={{ height: "200px", objectFit: "contain", background: "#f8f9fa" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{product.name}</h5>
          <p className="card-text flex-grow-1">{product.desc}</p>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge fs-6">{product.price}</span>
            <a href={product.link} className="btn btn-warning btn-sm text-dark fw-bold">
              Get Item 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLayout;
