import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { }
});

const postListReducer = (curPostList, action) => {
  let newPostList = curPostList;
  if (action.type === "DELETE_POST") {
    newPostList = curPostList.filter(post => post.id !== action.payload.postId)
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...curPostList]
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {

  const [postList, dispachPostLst] = useReducer(postListReducer, DEFAULT_POST_LIST)

  const addPost = (userId, postTile, postBody, reactions, tags) => {
    dispachPostLst({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTile,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags
      }
    })
  }
  const deletePost = (postId) => {
    dispachPostLst({
      type: "DELETE_POST",
      payload: {
        postId
      }
    })
  }

  return (<PostList.Provider value={{ postList, addPost, deletePost }}>{children}</PostList.Provider>);
};

const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Going to Goa',
    body: 'Journey begins to goa with friends.The best time to vist Goa is in summers and i am all set to enjoy the vibe of the best suumer destination.',
    reactions: 1000,
    userId: 'DeepakJaiswal',
    tags: ['trip', 'Goa', 'beach']
  },
  {
    id: '2',
    title: 'joining in microsoft',
    body: 'Discover limitless opportunities and innovation with Microsoft. Join us to shape the future together. Your journey starts here.',
    reactions: 1500,
    userId: 'DeepakJaiswal',
    tags: ['microsoft', 'coder']
  }
]

export default PostListProvider;