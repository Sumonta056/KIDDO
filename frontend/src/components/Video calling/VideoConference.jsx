import React from "react";

function VideoConference() {
  const headerStyle = {
    width: "100%",
    height: "100vh",
    background: "#00122e",
    position: "relative",
  };

  const navStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    background: "#182842",
    width: "120px",
    padding: "120px 0",
  };

  const logoStyle = {
    width: "56px",
    display: "block",
    margin: "auto",
    cursor: "pointer",
  };

  const ulStyle = {
    marginTop: "160px",
  };

  const liStyle = {
    listStyle: "none",
  };

  const liImgStyle = {
    width: "50px",
    display: "block",
    margin: "10px auto",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "10px",
    transition: "opacity 0.5s, background 0.5s",
  };

  const containerStyle = {
    marginLeft: "120px",
    padding: "0 2.5%",
  };

  const topIconsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "25px 0",
  };

  const topIconsImgStyle = {
    width: "25px",
    marginLeft: "40px",
    cursor: "pointer",
  };

  const rowStyle = {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space between",
  };

  const col1Style = {
    flexBasis: "58%",
  };

  const col2Style = {
    flexBasis: "33%",
  };

  const hostImgStyle = {
    width: "100%",
    borderRadius: "15px",
  };

  const controlsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const controlsImgStyle = {
    width: "40px",
    margin: "20px 10px",
    cursor: "pointer",
    transition: "transform 0.5s",
  };

  const callIconStyle = {
    width: "70px",
  };

  const videoJoinedStyle = {
    background: "#182842",
    borderRadius: "15px",
    padding: "30px 40px 50px",
    color: "#fff",
  };

  const videoJoinedDivStyle = {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridGap: "20px",
  };

  const videoJoinedImgStyle = {
    width: "100%",
    borderRadius: "10px",
    cursor: "pointer",
  };

  const videoInviteStyle = {
    background: "#182842",
    borderRadius: "15px",
    padding: "30px 40px 50px",
    color: "#fff",
    marginTop: "20px",
  };

  const videoInviteImgStyle = {
    marginTop: "20px",
    width: "50px",
    marginLeft: "5px",
    borderRadius: "50%",
    cursor: "pointer",
  };

  return (
    <div style={headerStyle}>
      <nav style={navStyle}>
        <img src="images/logo.png" style={logoStyle} alt="" />
        <ul style={ulStyle}>
          <li style={liStyle}>
            <img src="images/live.png" style={liImgStyle} alt="" />
          </li>
          <li style={liStyle}>
            <img src="images/video.png" style={liImgStyle} alt="" />
          </li>
          <li style={liStyle}>
            <img src="images/message.png" style={liImgStyle} alt="" />
          </li>
          <li style={liStyle}>
            <img src="images/notification.png" style={liImgStyle} alt="" />
          </li>
          <li style={liStyle}>
            <img src="images/users.png" style={liImgStyle} alt="" />
          </li>
          <li style={liStyle}>
            <img src="images/setting.png" style={liImgStyle} alt="" />
          </li>
        </ul>
      </nav>
      <div style={containerStyle}>
        <div style={topIconsStyle}>
          <img src="images/search.png" style={topIconsImgStyle} alt="" />
          <img src="images/menu.png" style={topIconsImgStyle} alt="" />
        </div>
        <div style={rowStyle}>
          <div style={col1Style}>
            <img src="images/image.png" style={hostImgStyle} alt="" />
            <div style={controlsStyle}>
              <img src="images/chat.png" style={controlsImgStyle} alt="" />
              <img src="images/disconnect.png" style={controlsImgStyle} alt="" />
              <img src="images/call.png" style={callIconStyle} alt="" />
              <img src="images/mic.png" style={controlsImgStyle} alt="" />
              <img src="images/cast.png" style={controlsImgStyle} alt="" />
            </div>
          </div>
          <div style={col2Style}>
            <div style={videoJoinedStyle}>
              <p>People Joined</p>
              <div style={videoJoinedDivStyle}>
                <img src="images/people-1.png" style={videoJoinedImgStyle} alt="" />
                <img src="images/people-2.png" style={videoJoinedImgStyle} alt="" />
                <img src="images/people-3.png" style={videoJoinedImgStyle} alt="" />
                <img src="images/people-4.png" style={videoJoinedImgStyle} alt="" />
                <img src="images/people-5.png" style={videoJoinedImgStyle} alt="" />
              </div>
            </div>
            <div style={videoInviteStyle}>
              <p>Invite More People</p>
              <img src="images/user-1.png" style={videoInviteImgStyle} alt="" />
              <img src="images/user-2.png" style={videoInviteImgStyle} alt="" />
              <img src="images/user-3.png" style={videoInviteImgStyle} alt="" />
              <img src="images/user-4.png" style={videoInviteImgStyle} alt="" />
              <img src="images/user-5.png" style={videoInviteImgStyle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoConference;
