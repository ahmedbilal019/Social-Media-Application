import { Children, createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ Children }) => {
  const [postList, dispatechPostList] = useReducer();
  const addPost = () => {};

  const deletePost = () => {};
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {Children}
    </PostList.Provider>
  );
};
export default PostListProvider;
