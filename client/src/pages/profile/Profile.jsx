import "./profile.css";
import Topbar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
                <h4 className="profileInfoName">Sai Tejas A R</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="sai"/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}