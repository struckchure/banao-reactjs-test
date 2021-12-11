import React from "react";

// components

import BaseLayout from "@/layouts/BaseLayout";
import Nav from "@/components/nav/Nav";
import IntroContent from "@/components/nav/IntroContent";
import Container from "@/layouts/Container";
import Tab from "@/components/tabs/Tab";

// pages for tab

import AllPosts from "@/pages/articles/AllPosts";
import Event from "@/pages/articles/Event";
import Article from "@/pages/articles/Article";
import Education from "@/pages/articles/Education";
import Job from "@/pages/articles/Job";
import Group from "@/components/Group";

const tabExtraContent = (is_authenticated) => {
  return (
    <div className="tab-extra-content">
      <button className="toolbar-btn btn btn-default">
        <span>Write a Post</span>
        <i className="icon dropdown"></i>
      </button>
      {is_authenticated ? (
        <button className="toolbar-btn btn btn-outline-primary auth-btn">
          <span>Leave Group</span>
          <i className="text-gray mx-2 icon user group"></i>
        </button>
      ) : (
        <button className="toolbar-btn btn btn-primary">
          <span>Join Group</span>
          <i className="text-white mx-2 icon user group"></i>
        </button>
      )}
    </div>
  );
};

const tabContent = (is_authenticated) => {
  const groups = [
    {
      group_name: "Leisure",
      is_following: true,
    },
    {
      group_name: "Activism",
      is_following: false,
    },
    {
      group_name: "MBA",
      is_following: false,
    },
    {
      group_name: "Philosophy",
      is_following: false,
    },
  ];

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
        <section className="sticky top-0">
          <form>
            <div className="icon-form icon-lr edit-panel-form bg-transparent">
              <i className="icon point"></i>
              <input
                type="text"
                className="form-control"
                value={"Noida, India"}
              />
              <i className="icon pencil"></i>
            </div>
          </form>

          <div className="edit-panel-info">
            {is_authenticated ? (
              <div className="groups">
                <label className="title">
                  <i className="icon thumbs up"></i>
                  <span className="uppercase">Recommended Groups</span>
                </label>

                {groups &&
                  groups.map((group, index) => (
                    <Group {...group} key={index} />
                  ))}

                <a href="#" className="float-right no-underline mt-10">
                  See More ...
                </a>
              </div>
            ) : (
              <div className="edit-panel-content">
                <i className="icon warning circle"></i>
                <p>
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default function Index() {
  const is_authenticated = true;

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
    <BaseLayout>
      {/* nav */}
      <Nav is_authenticated={is_authenticated} />

      {/* intro */}
      <IntroContent />

      <Container>
        {/* articles */}
        <section className="content">
          <Tab
            tabButtons={tab_buttons}
            tabExtraContent={tabExtraContent(is_authenticated)}
            tabContent={tabContent(is_authenticated)}
          />
        </section>
      </Container>
    </BaseLayout>
  );
}
