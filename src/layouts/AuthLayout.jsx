import React from "react";
import "@/assets/css/auth.css";

import auth_image from "@/assets/img/auth-img.svg";

export default function AuthLayout({ header, content, extra_content }) {
  return (
    <div className="auth-layout">
      <div className="auth-header">{header}</div>
      <div className="auth-content">
        <div>{content}</div>

        <div>
          <div>{extra_content}</div>
          <img src={auth_image} alt="" />
          <p className="copy-text">
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}
