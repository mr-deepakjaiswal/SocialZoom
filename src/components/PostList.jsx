import React from 'react'
import Post from './Post'
import { useContext } from 'react'
import { PostList as PostListData } from "../store/Post-List_store";

export default function PostList() {

  const { postList } = useContext(PostListData)

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {postList.map((post) => (<Post key={post.id} post={post}></Post>))}
        </div>
      </div>
    </div>
  )
}
