import React, { useState } from "react";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import "@/assets/css/articles.css";

export default function Article({
  title,
  header,
  description,
  author,
  views,
  image,
  link,
  details,
}) {
  const [show_dropdown, set_show_dropdown] = useState(false);

  return (
    <div className="article">
      {image && (
        <div className="article-image">
          <img src={image} alt="" />
        </div>
      )}

      <div className="article-content">
        <div className="article-title">
          <label>{title}</label>
        </div>

        <div className="article-header">
          <h4>{header}</h4>
          <button
            className="btn-icon p-2 dropdown text-right"
            onClick={() => {
              set_show_dropdown(!show_dropdown);
            }}
          >
            <i className="icon ellipsis horizontal"></i>

            <div
              className="shadow-lg dropdown-content"
              style={{ display: show_dropdown ? "block" : "none" }}
            >
              <button className="btn item">Edit</button>
              <button className="btn item">Report</button>
              <button className="btn item">Option 3</button>
            </div>
          </button>
        </div>

        <div className="article-description">
          {description && <p className="text-truncate">{description}</p>}

          {details && (
            <div className="details">
              {details.map((icon, index) => (
                <span>
                  <i className={icon.icon}></i>
                  <label>{icon.text}</label>
                </span>
              ))}
            </div>
          )}
          {link && (
            <a href={link.link}>
              <button className="btn btn btn-outline-danger w-full">
                {link.text}
              </button>
            </a>
          )}
        </div>

        <div className="article-footer">
          <div className="author">
            <img src={author.image} alt={author.name} />
            <label className="author-name">{author.name}</label>
          </div>

          <div className="info">
            <span>
              <i className="icon eye"></i>
              <span>{views}k views</span>
            </span>

            <button className="share-btn btn-icon">
              <i className="icon share alternate"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
