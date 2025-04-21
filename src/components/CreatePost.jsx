import React from "react";

const CreatePost = () => {
  return (
    <form className="createPost">
      <div className="mb-3">
        <label htmlFor="post_id" className="form-label">
          Enter yor post ID:
        </label>
        <input
          type="text"
          className="form-control"
          id=""
          placeholder="e.g. 0,1,2"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="post_title" className="form-label">
          Title of you post:
        </label>
        <input
          type="text"
          className="form-control"
          id=""
          placeholder="write title for the post"
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="post_content" className="form-label">
          Write something About your post:
        </label>
        <textarea
          id=""
          name=""
          rows="4"
          cols="50"
          placeholder="write some text for your post "
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          Hashtags#:
        </label>
        <input
          type="text"
          className="form-control"
          id=""
          placeholder="add some hashtags(#) to inhance post visiblity"
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          Number of Reactions:
        </label>
        <input
          type="number"
          className="form-control"
          id=""
          placeholder="e.g. 0,1,2..."
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
};

export default CreatePost;
