import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios"

export default function Feed({username}) {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = username ? await axios.get("/posts/profile/"+username) : await axios.get("posts/timeline/6453ac76b422f9c8776f329c");
      setPosts(res.data)
    };
   fetchPosts();
  },[username]);
  return (
    <div className="feed">
      
      <div className="feedWrapper"></div>
      <Share/>
      {posts.map(p=>(
        <Post key={p._id} post={p}/>
      ))}
      
     
      </div>
  )
}
