import React from "react";
import { removeLocalStorage } from "../utilities/authorization";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg  bg-dark " data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Paper Manager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">
                Home
              </Link>
            </li>
          </ul>

          <button
            className="btn btn-outline-light m-2"
            onClick={() => {
              navigate("/addpaper");
            }}
          >
            Add paper
          </button>
          <button
            className="btn btn-outline-light m-2 "
            onClick={() => {
              removeLocalStorage();
              toast.success("log out is successfull");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
