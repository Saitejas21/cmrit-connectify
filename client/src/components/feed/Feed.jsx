import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"

export default function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    console.log("feed rendered")
  })
  return (
    <div className="feed">
      <div className="feedWrapper"></div>
      <Share/>
      {/* {Posts.map(p=>(
        <Post key={p.id} post={p}/>
      ))} */}
      
     
      </div>
  )
}
