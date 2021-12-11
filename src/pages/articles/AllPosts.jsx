import React from "react";
import TabView from "@/components/tabs/TabView";
import Article from "@/components/articles/Article";

// images

import article_1 from "@/assets/img/article-1.svg";
import author_1 from "@/assets/img/author-1.svg";

export default function AllPosts() {
  const artlces = [
    {
      title: "✍️ Article",
      header: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to reinstate",
      author: { name: "Sarthak Kamra", image: author_1 },
      views: 1.4,
      image: article_1,
    },
    {
      title: "🔬️ Education",
      header:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to reinstate",
      author: { name: "Sarah West", image: author_1 },
      views: 1.4,
      image: article_1,
    },
    {
      title: "🗓️ Meetup",
      header: "Finance & Investment Elite Social Mixer @Lujiazui",
      description: "",
      author: { name: "Ronal Jones", image: author_1 },
      details: [
        {
          icon: "icon calendar",
          text: "Fri, 12 Oct, 2018",
        },
        {
          icon: "icon point",
          text: "Ahmedabad, India",
        },
      ],
      link: {
        link: "#",
        text: "Visit Website",
      },
      views: 1.4,
      image: article_1,
    },
    {
      title: "💼️ Job",
      header: "Software Developer",
      details: [
        {
          icon: "icon calendar",
          text: "Innovaccer Analytics Private Ltd.",
        },
        {
          icon: "icon point",
          text: "Noida, India",
        },
      ],
      author: { name: "Joseph Gray", image: author_1 },
      link: {
        link: "#",
        text: "Apply on Timesjobs",
      },
      views: 1.4,
    },
  ];

  return (
    <TabView id="all_posts" defaultTab>
      {artlces && artlces.map((article, index) => <Article {...article} />)}
    </TabView>
  );
}
