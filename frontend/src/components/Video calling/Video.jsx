import React from "react";
import styles from "../Video calling/Video.module.css";

function VideoConference() {
  return (
    <div className={styles.header}>
      <nav>
        <img src="images/logo.png" className={styles.logo} alt="" />
        <ul>
          <li>
            <img src="images/live.png" className={styles.active} alt="" />
          </li>
          <li>
            <img src="images/video.png" alt="" />
          </li>
          <li>
            <img src="images/message.png" alt="" />
          </li>
          <li>
            <img src="images/notification.png" alt="" />
          </li>
          <li>
            <img src="images/users.png" alt="" />
          </li>
          <li>
            <img src="images/setting.png" alt="" />
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <div className={styles["top-icons"]}>
          <img src="images/search.png" alt="" />
          <img src="images/menu.png" alt="" />
        </div>
        <div className={styles.row}>
          <div className={styles["col-1"]}>
            <img src="images/image.png" className={styles["host-img"]} alt="" />
            <div className={styles.controls}>
              <img src="images/chat.png" alt="" />
              <img src="images/disconnect.png" alt="" />
              <img src="images/call.png" className={styles["allicon"]} alt="" />
              <img src="images/mic.png" alt="" />
              <img src="images/cast.png" alt="" />
            </div>
          </div>
          <div className={styles["col-2"]}>
            <div className={styles.VideoJoined}>
              <p>People Joined</p>
              <div>
                <img src="images/people-1.png" alt="" />
                <img src="images/people-2.png" alt="" />
                <img src="images/people-3.png" alt="" />
                <img src="images/people-4.png" alt="" />
                <img src="images/people-5.png" alt="" />
              </div>
            </div>
            <div className={styles.VideoInvite}>
              <p>Invite More People</p>
              <div>
                <img src="images/user-1.png" alt="" />
                <img src="images/user-2.png" alt="" />
                <img src="images/user-3.png" alt="" />
                <img src="images/user-4.png" alt="" />
                <img src="images/user-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoConference;
