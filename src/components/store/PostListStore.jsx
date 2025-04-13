import { Children, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
// reducer function
const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFALT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = () => {};
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFALT_POST_LIST = [
  {
    id: "1",
    title: "Going to Islamabad",
    body: "Hey frends! i am going to islamabad, for trip",
    reactions: 4,
    userId: "user_9",
    tags: ["Trip", "Pak-Capital", "islamabad"],
  },
  {
    id: "2",
    title: "Attending the TECH ceminar",
    body: "Hey frends! i am going to attend the biggest tech ceminar at Lahore",
    reactions: 10,
    userId: "user_10",
    tags: ["TECH ceminar", "Lahore", "IT"],
  },
];
export default PostListProvider;
