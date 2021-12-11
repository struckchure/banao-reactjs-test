import React, { useEffect } from "react";

import "@/assets/css/modal.css";

export default function Modal({ children, show, set_show }) {
  // useEffect(() => {
  // });
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div
      className={show ? "custom-modal show-modal" : "custom-modal hide-modal"}
    >
      <div className="custom-modal-content">
        <button
          className="icon-btn close-btn"
          onClick={() => {
            set_show(!show);
          }}
        >
          <i className="icon times"></i>
        </button>
        {children}
      </div>
    </div>
  );
}
