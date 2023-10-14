import React, { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import ChatBoxReciever, { ChatBoxSender } from "./ChatBox";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
import { useNavigate } from "react-router-dom";

export default function ChatContainer() {
  let socketio = socketIOClient("http://localhost:5001");
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const avatar = localStorage.getItem("avatar");
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  useEffect(() => {
    socketio.on("chat", (senderChats) => {
      setChats(senderChats);
    });
  });

  function sendChatToSocket(chat) {
    socketio.emit("chat", chat);
  }

  function addMessage(chat) {
    const newChat = { ...chat, user: localStorage.getItem("user"), avatar };
    setChats([...chats, newChat]);
    sendChatToSocket([...chats, newChat]);
  }
  function Home() {
    navigate("/");
  }

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
  }

  function ChatsList() {
    return (
      <div
        style={{
          height: "70vh",
          overflowX: "hidden",
          marginLeft: 100,
          marginRight: 100,
        }}
      >
        {chats.map((chat, index) => {
          if (chat.user === user)
            return (
              <ChatBoxSender
                key={index}
                message={chat.message}
                avatar={chat.avatar}
                user={chat.user}
              />
            );
          return (
            <ChatBoxReciever
              key={index}
              message={chat.message}
              avatar={chat.avatar}
              user={chat.user}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4
              style={{
                width: "200%",
                backgroundColor: "#F4DFB6",
                marginTop: 30,
                marginBottom: 40,
                marginRight: 20,
                marginLeft: 20,
                padding: 15,
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 5,
              }}
            >
              Username: {user}
            </h4>

            <p
              onClick={() => logout()}
              style={{
                width: "100%",
                backgroundColor: "#F4DFB6",
                cursor: "pointer",
                marginTop: 30,
                marginBottom: 40,
                marginRight: 20,
                padding: 15,
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 5,
              }}
            >
              Log Out
            </p>

            <p
              onClick={() => Home()}
              style={{
                width: "100%",
                backgroundColor: "#F4DFB6",
                cursor: "pointer",
                marginTop: 30,
                marginBottom: 40,
                marginRight: 20,
                padding: 15,
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 5,
              }}
            >
              Exit
            </p>
          </div>
          <ChatsList />

          <InputText
            style={{
              padding: 10,
            }}
            addMessage={addMessage}
          />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
}
