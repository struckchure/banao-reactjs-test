import React, { useState } from "react";

export default function Toolbar({ tabButtons, tabExtraContent }) {
  const [currentTabKey, __setCurrentTabKey] = useState(tabButtons[0].name);

  const setCurrentTab = (e) => {
    const { name } = e.target;

    const tab_elements = document.querySelectorAll(".tab-view");
    const element = document.querySelector(`#${name}`);

    for (const tab of tab_elements) {
      if (tab != element) {
        tab.classList.remove("tab-show");
      }
    }

    element.classList.add("tab-show");

    __setCurrentTabKey(name);
  };

  return (
    <div className="tab-toolbar">
      {/* tab links */}
      <div className="tab-btn-group">
        {tabButtons &&
          tabButtons.map((tabButton, index) => (
            <button
              className={
                currentTabKey == tabButton.name
                  ? "tab-active tab-btn"
                  : "tab-btn"
              }
              name={tabButton.name}
              onClick={setCurrentTab}
              key={index}
            >
              {tabButton.text}
            </button>
          ))}
      </div>

      {/* edit tools */}
      <div className="tab-extra-content">{tabExtraContent}</div>
    </div>
  );
}
