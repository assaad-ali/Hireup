import "./postForm.css";
import { useState } from "react";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [qualifications, setQualifications] = useState("");

  return (
    <section className="post-form-section">
      <form>
        <h2>Create a Job Post</h2>
        <div className="post-form-group">
          <label>Title:</label>
          <input
            className="form-input"
            type="text"
            value={title}
            onChange={({ value }) => {
              setTitle(value);
            }}
          />
        </div>
        <div className="post-form-group">
          <label>Description:</label>
          <textarea
            className="post-form-textarea"
            value={description}
            onChange={({ value }) => {
              setDescription(value);
            }}
          />
        </div>
        <div className="post-form-group">
          <label>Qualifications:</label>
          <textarea
            className="post-form-textarea"
            value={qualifications}
            onChange={({ value }) => {
              setQualifications(value);
            }}
          />
        </div>
        <button type="submit">Post Job</button>
      </form>
    </section>
  );
};

export default PostForm;
