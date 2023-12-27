// Sidebar.js
import React from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { BsTable } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const AdminPageSidebar = () => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "15px 0px" }}
        >
          <IoHome style={{ width: 20, height: 20 }} />
          <span className="fs-5 d-none d-sm-inline" style={{ marginLeft: 5 }}>
            Home
          </span>
        </a>
        <hr
          style={{
            backgroundColor: "#FFFFFF",
            width: "100%",
            height: "2px",
          }}
        />
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0 text-white">
              <IoIosSpeedometer style={{ width: 20, height: 20 }} />{" "}
              <span className="ms-1 d-none d-sm-inline">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle text-white">
              <BsTable style={{ width: 20, height: 20 }} />{" "}
              <span className="ms-1 d-none d-sm-inline">Orders</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle text-white">
              <FaUserCircle style={{ width: 20, height: 20 }} />{" "}
              <span className="ms-1 d-none d-sm-inline">Uers</span>{" "}
            </a>
          </li>
          <li>
            <a
              href="/admin/products"
              className="nav-link px-0 align-middle text-white"
            >
              <FaBoxOpen style={{ width: 20, height: 20 }} />{" "}
              <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default AdminPageSidebar;
