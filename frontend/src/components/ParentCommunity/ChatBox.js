import React from "react";
import { Avatar, Image } from "antd";

export default function ChatBoxReciever({ avatar, user, message }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        marginBottom: 10,
      }}
    >
      <Avatar
        size={70}
        src={
          <Image
            src={avatar}
            style={{
              objectFit: "cover",
              width: 65,
              height: 65,
              borderRadius: "100%",
              marginRight: 10,
            }}
            preview={false}
          />
        }
      />
      <p
        style={{
          padding: 10,
          backgroundColor: "#dcf8c6",
          borderRadius: 10,
          width: "40%",
        }}
      >
        <strong style={{ fontSize: 13 }}>{user}</strong> <br></br>
        {message}
      </p>
    </div>
  );
}

export function ChatBoxSender({ avatar, user, message }) {
  return (
    <div
      style={{
        display: "flex",
        paddingRight: 10,
        justifyContent: "flex-end",
        flexDirection: "row",
        marginBottom: 10,
        marginLeft: 10,
      }}
    >
      <p
        style={{
          padding: 10,
          backgroundColor: "#fff",
          borderRadius: 10,
          width: "40%",
          marginRight: 15,
        }}
      >
        <strong style={{ fontSize: 13 }}>{user}</strong> <br></br>
        {message}
      </p>
      <Avatar
        size={70}
        src={
          <Image
            src={avatar}
            style={{
              objectFit: "cover",
              width: 65,
              height: 65,
              borderRadius: "100%",
            }}
            preview={false}
          />
        }
      />
    </div>
  );
}
