import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "./store/PostListStore";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <div className="card post post-card " style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => {
          return (
            <span key={tag} className="badge text-bg-primary">
              {tag}
            </span>
          );
        })}
        <div className="alert alert-success reactions" role="alert">
          {post.reactions} peoples has been reacted on your post!
        </div>
      </div>
    </div>
  );
};

export default Post;
