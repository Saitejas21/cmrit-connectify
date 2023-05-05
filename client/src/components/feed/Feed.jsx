import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios"

export default function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = await axios.get("posts/timeline/6453ac76b422f9c8776f329c");
      setPosts(res.data)
    };
   fetchPosts();
  },[]);
  return (
    <div className="feed">
      
      <div className="feedWrapper"></div>
      <Share/>
      {posts.map(p=>(
        <Post key={p.id} post={p}/>
      ))}
      
     
      </div>
  )
}
