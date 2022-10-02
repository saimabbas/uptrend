import React from "react";

import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/views/blog.css";

const BlogCard = (props) => {
  return (
    <div
      className={`blog-card  ${
        props.lightBlogCard ? "light-blog-card" : "dark-blog-card"
      }`}
    >
      <div className="blog-card-content">
        <div className="blog-card-img-box">
          <img src={props.blogImg} alt="Blog Img" />
          <div className="blog-tags-box">
            <div className="blog-tags-grid">{props.children}</div>
          </div>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.description}</p>
      </div>
      <div className="blog-img-para">
        <div className="bipara-left">
          <img src={props.personImg} alt="" />
          <div className="bi-text">
            <h5>{props.personName}</h5>
            <p>{props.date}</p>
          </div>
        </div>
        <span>{props.readTime}</span>
      </div>
    </div>
  );
};

export default BlogCard;
