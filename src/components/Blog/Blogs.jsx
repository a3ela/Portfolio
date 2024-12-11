import React from "react";
import { useEffect, useState } from "react";
import blogService from "../../services/medium";
import "./blog.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    blogService.getBlogs().then((blogs) => {
      setBlogs(blogs.items.slice(0));
    });
  }, []);

  const getContentOfBlog = (blog) => {
    const startingPoint = blog.indexOf("<p>");
    const relevantText = blog.slice(startingPoint + 3);

    return relevantText.substr(0, 100) + "...";
  };

  return (
    <section className="blog section" id="section">
      <div className="blogs__container container grid">
        {blogs.map((blog) => (
          <article className="blogs__content">
            <div className="blogs__head">
              <h2 className="blogs__title">{blog.title}</h2>
              <p>{blog.pubDate.split(" ")[0]}</p>
            </div>
            <p className="blogs__descripition">
              {getContentOfBlog(blog.content)}
            </p>
            <a href={blog.link} target="_blank">
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
