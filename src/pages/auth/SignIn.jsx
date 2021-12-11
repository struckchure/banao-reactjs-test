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
          <label className="auth-form-title">Sign In</label>
          <form
            className="auth-form"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <input
                type="email"
                className="form-control rounded rounded-b-none"
                placeholder="Email"
              />
              <div className="icon-form">
                <input
                  type="password"
                  className="form-control rounded rounded-t-none"
                  placeholder="Password"
                />
                <i className="icon eye cursor-pointer icon-r"></i>
              </div>
            </div>

            <button
              type="submit"
              className="auth-form-button btn btn-primary rounded-full"
            >
              Sign In
            </button>

            <div className="py-4">
              <button className="auth-form-button btn outline rounded">
                <i className="icon facebook circle"></i>
                Sign in with Facebook
              </button>
              <button className="auth-form-button btn outline rounded">
                <i className="icon google"></i>
                Sign in with Google
              </button>

              <button className="auth-form-button btn">Forgot Password?</button>
            </div>
          </form>
        </div>
      }
      extra_content={
        <div className="auth-info">
          <p>
            Don’t have an account yet? <a href="#">Create new for free!</a>
          </p>
        </div>
      }
    />
  );
}
