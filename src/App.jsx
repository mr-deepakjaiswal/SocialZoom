import { useState } from 'react'
import './App.css'
import Headder from './components/Headder'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/Post-List_store'

function App() {
  const [selectTab, setSelectTab] = useState("Home")

  return (
    <PostListProvider>
      <div className="main-div">
        <SideBar selectTab={selectTab} setSelectTab={setSelectTab}></SideBar>
        <div className="side-container">
          <Headder></Headder>
          {selectTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
