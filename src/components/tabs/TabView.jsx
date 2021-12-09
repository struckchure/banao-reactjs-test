import React from "react";

export default function TabView({ id, children, defaultTab }) {
  return (
    <div className={defaultTab ? "tab-view tab-show" : "tab-view"} id={id}>
      {children}
    </div>
  );
}
