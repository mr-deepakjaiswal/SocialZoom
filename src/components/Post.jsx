import React from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { useContext } from 'react';
import { PostList } from '../store/Post-List_store';


export default function Post({ post }) {

  const { deletePost } = useContext(PostList)

  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body card-div">
            <h5 className="card-title">{post.title}
              <span className="badge text-bg-success reaction"><AiTwotoneLike /> {post.reactions}</span>
            </h5>
            <p className="card-text"> {post.body} </p>
            {post.tags.map((tag) => (<span key={tag} className="badge text-bg-info tags">{tag}</span>))}
            <button type="button" className="btn btn-outline-danger dltbtn" onClick={() => deletePost(post.id)}><MdOutlineDeleteForever className='dltlogo' /></button>

          </div>
        </div>
      </div>
    </div>
  )
}
