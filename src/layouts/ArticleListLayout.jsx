import React from "react";

import "@/assets/css/articles.css";

import Tab from "@/components/tabs/Tab";
import AllPosts from "@/pages/AllPosts";
import Event from "@/pages/Event";
import Article from "@/pages/Article";
import Education from "@/pages/Education";
import Job from "@/pages/Job";

const tabExtraContent = () => {
  return (
    <div className="tab-extra-content">
      <button className="m-2 btn btn-default">
        <span>Write a Post</span>
        <i className="icon dropdown"></i>
      </button>

      <button className="m-2 btn btn-primary">
        <span>Join Group</span>
        <i className="text-white mx-2 icon user group"></i>
      </button>
    </div>
  );
};

const tabContent = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="page-content">
        <AllPosts />
        <Article />
        <Event />
        <Education />
        <Job />
      </div>

      <div className="edit-panel">
        <form>
          <div className="edit-panel-form">
            <i className="icon point"></i>
            <input type="text" value={"Noida, India"} />
            <i className="icon pencil"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function ArticleListLayout() {
  const tab_buttons = [
    {
      name: "all_posts",
      text: "All Posts",
    },
    {
      name: "article",
      text: "Article",
    },
    {
      name: "event",
      text: "Event",
    },
    {
      name: "education",
      text: "Education",
    },
    {
      name: "job",
      text: "Job",
    },
  ];

  return (
    <div>
      <Tab
        tabButtons={tab_buttons}
        tabExtraContent={tabExtraContent()}
        tabContent={tabContent()}
      />
    </div>
  );
}
