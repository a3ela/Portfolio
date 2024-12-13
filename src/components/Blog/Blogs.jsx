import React from "react";
import { useEffect, useState } from "react";
import blogService from "../../services/medium";
import "./blog.css";

const getContentOfBlog = (blog) => {
  const startingPoint = blog.indexOf("<p>");
  const relevantText = blog.slice(startingPoint + 3);

  return relevantText.substr(0, 100) + "...";
};

function extractImageUrl(html) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const imgElement = tempDiv.querySelector("img");
  return imgElement ? imgElement.src : null;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    blogService.getBlogs().then((blogs) => {
      setBlogs(blogs.items.slice(0));
    });
  }, []);

  return (
    <section className="blog section" id="section">
      <div className="section__head container">
        <h1 className="section__title">Blog</h1>
        <h2 className="section__subtitle">some of my posts</h2>
      </div>
      <div className="blogs__container container grid">
        {blogs.map((blog) => {
          const backgroundImageUrl = blog.content
            ? extractImageUrl(blog.content)
            : "";
          return (
            <article
              className="blogs__content"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${backgroundImageUrl})`,
              }}
            >
              <div className="blogs__head">
                <h2 className="blogs__title">{blog.title}</h2>
                <p>{blog.pubDate.split(" ")[0]}</p>
              </div>
              <p className="blogs__description">
                {getContentOfBlog(blog.content)}
              </p>
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
