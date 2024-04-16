import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react'
import { PostList } from '../store/Post-List_store';

export default function CreatePost() {

  const { addPost } = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const HandelSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTile = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postTile, postBody, reactions, tags);

    userIdElement.current.value="";    
    postTitleElement.current.value="";    
    postBodyElement.current.value="";    
    reactionsElement.current.value="";    
    tagsElement.current.value="";    
  };

  return (
    <div>
      <form className='form_div' onSubmit={HandelSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User Id</label>
          <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder='Enter Your User Id ' />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder='Enter the Post Title Here... ' />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea className="form-control" ref={postBodyElement} id="body" rows="3" placeholder='Tell me some thing more about it...'></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="Reactions" className="form-label">Reactions</label>
          <input type="text" ref={reactionsElement} className="form-control" id="Reactions" placeholder='Enter How many People Likes the post' />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Hastags</label>
          <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder='Please enter the tags with spaces b/w them' />
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </div>
  )
}
