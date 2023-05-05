import "./profile.css";
import Topbar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const[user,setUser] = useState({})

  useEffect(()=>{
    const fetchUser = async () =>{
      const res = await axios.get(`/users?username=sai`);
      setUser(res.data)
    };
   fetchUser();
  },[]);



  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}posts/cover.jpg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person-pfp/4.png`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="sai"/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}