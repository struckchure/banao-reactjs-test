import AuthLayout from "@/layouts/AuthLayout";
import React from "react";

export default function SignUp() {
  return (
    <AuthLayout
      header={
        <div>
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
      }
      content={
        <div>
          <label className="auth-form-title">Sign Up</label>
          <form
            className="auth-form"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div className="d-flex">
              <input
                type="text"
                className="form-control rounded rounded-b-none rounded-r-none w-auto"
                placeholder="First name"
              />
              <input
                type="text"
                className="form-control rounded rounded-b-none rounded-l-none w-auto"
                placeholder="Last name"
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <div className="icon-form">
                <input
                  type="password"
                  className="form-control rounded-none"
                  placeholder="Password"
                />
                <i className="icon eye cursor-pointer"></i>
              </div>
              <input
                type="password"
                className="form-control rounded rounded-t-none"
                placeholder="Confirm Password"
              />
            </div>

            <button
              type="submit"
              className="auth-form-button btn btn-primary rounded-full"
            >
              Create Account
            </button>

            <div className="py-4">
              <button className="auth-form-button btn outline rounded">
                <i className="icon facebook circle"></i>
                Sign up with Facebook
              </button>
              <button className="auth-form-button btn outline rounded">
                <i className="icon google"></i>
                Sign up with Google
              </button>
            </div>
          </form>
        </div>
      }
      extra_content={
        <div className="auth-info">
          <p>
            Already have an account? <a href="#">Sign In</a>
          </p>
        </div>
      }
    />
  );
}
