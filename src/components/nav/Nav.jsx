import React, { useState } from "react";

import "@/assets/css/nav.css";
import brand_logo from "@/assets/img/brand-logo.svg";

import Modal from "@/components/Modal";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";

export default function Nav({ is_authenticated }) {
  const [show_sign_in, set_show_sign_in] = useState(false);
  const [show_sign_up, set_show_sign_up] = useState(false);

  const [show_dropdown, set_show_dropdown] = useState(false);

  return (
    <>
      {/* auth pages modal */}

      <Modal show={show_sign_in} set_show={set_show_sign_in}>
        <SignIn />
      </Modal>

      <Modal show={show_sign_up} set_show={set_show_sign_up}>
        <SignUp />
      </Modal>

      <nav className="mobile-navbar">
        <div className="container mobile-navbar-content px-10 py-2">
          <button className="btn-icon">
            <i className="icon arrow left text-white"></i>
          </button>

          <button className="btn btn-outline-primary btn-outline-white">
            Join Group
          </button>
        </div>
      </nav>

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
              <div className="icon-form search-input">
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
                  Create account.{" "}
                  <a
                    href="#"
                    onClick={() => {
                      set_show_sign_up(!show_sign_up);
                    }}
                  >
                    It's free!
                  </a>
                </span>
              )}
              <button
                className="btn-icon dropdown"
                onClick={() => {
                  set_show_dropdown(!show_dropdown);
                }}
              >
                <div
                  className="shadow-lg dropdown-content"
                  style={{ display: show_dropdown ? "block" : "none" }}
                >
                  <button
                    className="btn item"
                    onClick={() => {
                      set_show_sign_in(!show_sign_in);
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    className="btn item"
                    onClick={() => {
                      set_show_sign_up(!show_sign_up);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
                <i className="icon dropdown mx-2"></i>
              </button>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
