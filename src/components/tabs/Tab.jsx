import React, { useState } from "react";

import "@/assets/css/tabs.css";
import Toolbar from "./Toolbar";

export default function Tab({ tabButtons, tabContent, tabExtraContent }) {
  return (
    <div className="tab">
      {/* tab */}

      <Toolbar tabButtons={tabButtons} tabExtraContent={tabExtraContent} />

      {/* content */}

      <div className="tab-content">{tabContent}</div>
    </div>
  );
}
