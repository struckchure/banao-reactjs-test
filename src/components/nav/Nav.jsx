import React from "react";

import brand_logo from "@/assets/img/brand-logo.svg";
import "@/assets/css/nav.css";

export default function Nav({ is_authenticated }) {
  return (
    <nav className="navbar">
      <div className="container nav-content px-10 py-2">
        {/* nav brand */}

        <div className="nav-brand">
          <a href="#">
            <img src={brand_logo} alt="" />
          </a>
        </div>

        {/* nav search form */}

        <div className="nav-form">
          <form>
            <div className="form-group icon-form">
              <i className="icon search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search for your favorite groups in ATG"
              />
            </div>
          </form>
        </div>

        {/* extra content */}

        <div className="auth-content">
          <label>
            {is_authenticated ? (
              <span>Siddarth Goyal</span>
            ) : (
              <span>
                Create account. <a href="#">It's free!</a>
              </span>
            )}
            <button className="btn-icon">
              <i className="icon dropdown"></i>
            </button>
          </label>
        </div>
      </div>
    </nav>
  );
}
