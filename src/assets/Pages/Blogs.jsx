import React, { useState } from "react";
import "../style/style.css";

// Import MDX posts
import Post15Aug from "../../blog/150825.mdx";
import Post14Aug from "../../blog/150825.mdx";
import Post13Aug from "../../blog/150825.mdx";
import Post12Aug from "../../blog/150825.mdx";
import Post11Aug from "../../blog/150825.mdx";


import BIMG from "../images/blog.webp";


const posts = [
  { id: 1, title: "How to Write a Research Problem Statement", date: "Aug 15, 2025", cover: BIMG, Component: Post15Aug },
  { id: 2, title: "Team Event Highlights", date: "Aug 14, 2025", cover: BIMG, Component: Post14Aug },
  { id: 3, title: "Office Culture Insights", date: "Aug 13, 2025", cover: BIMG, Component: Post13Aug },
  { id: 4, title: "Project Launch Update", date: "Aug 12, 2025", cover: BIMG, Component: Post12Aug },
  { id: 5, title: "Behind the Scenes", date: "Aug 11, 2025", cover: BIMG, Component: Post11Aug },
  { id: 5, title: "Behind the Scenes", date: "Aug 11, 2025", cover: BIMG, Component: Post11Aug },

];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (

    <section className="container-grid">
      {posts.map(({ id, title, date, cover, Component }) => (
        <article key={id} className="blog-card">
          <div className="blog-cover">
            <img src={cover} alt={title} loading="lazy" />
          </div>

          <div className="blog-content">
            <div className="blog-header">
              <h1 className="blog-title">{title}</h1>
              <p className="blog-meta">{date}</p>
            </div>

            <div className="blog-actions">
              <button
                className="btn btn-primary"
                onClick={() => setSelectedPost({ title, date, Component })}
              >
                Read more
              </button>
            </div>
          </div>
        </article>
      ))}

      {/* Modal Inside Blog.jsx */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPost(null)}>
              ×
            </button>
            <h2 className="modal-title">{selectedPost.title}</h2>
            <p className="modal-meta">{selectedPost.date}</p>
            <div className="modal-body">
              <selectedPost.Component />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};



export default Blog;




