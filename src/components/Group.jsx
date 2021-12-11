import React from "react";
import "@/assets/css/group.css";

export default function Group({ group_name, is_following }) {
  const follow_text = is_following ? "Following" : "Follow";
  return (
    <div className="group">
      <label className="group-name">{group_name}</label>
      <button className={is_following ? "follow-btn invert" : "follow-btn"}>
        {follow_text}
      </button>
    </div>
  );
}
