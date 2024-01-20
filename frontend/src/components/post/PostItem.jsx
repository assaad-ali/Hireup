import React from 'react';
import './postItem.css';

const PostItem = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.authorImage} alt={post.author} className="author-image" />
        <div className="author-info">
          <span className="author-name">{post.author}</span>
          <span className="post-date">{post.date}</span>
        </div>
      </div>
      <div className="post-body">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-description">{post.description}</p>
      </div>
      <div className="post-actions">
        <button className="like-button">👍</button>
        <button className="comment-button">💬</button>
      </div>
    </div>
  );
};

export default PostItem;
