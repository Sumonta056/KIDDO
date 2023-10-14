import React, { useState } from "react";
import { CommentOutlined } from "@ant-design/icons";
import _ from "lodash";

const button = {
  width: "10%",
  height: 50,
  fontWeight: "bold",
  borderRadius: 10,
  fontSize: 18,
  backgroundColor: "#075e54",
  borderWidth: 0,
  color: "#fff",
  margin: 10,
};

export default function UserLogin({ setUser }) {
  const [user, setAUser] = useState("");
  const [userType, setUserType] = useState("");

  function handleSetUser() {
    if (!user) return;
    localStorage.setItem("user", user);
    setUser(user);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
    );
    alert("Search Completed");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ margin: 10, textAlign: "center", color: "white" }}>
        <CommentOutlined style={{ fontSize: 30, color: "white" }} /> TALK WITH
        ADVISOR
      </h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <select
          style={{
            margin: 10,
            height: 50,
            width: "30%",
            borderRadius: 10,
            borderWidth: 1,
            fontSize: 15,
            padding: 5,
          }}
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="Parent">Pediatrician</option>
          <option value="Teacher">Child Psychologist</option>
          <option value="Student">Parenting Coach</option>
          <option value="Other">Nutritionist</option>
          <option value="Other">Child Development Specialist</option>
        </select>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            margin: 10,
            height: 50,
            width: "50%",
            borderRadius: 10,
            borderWidth: 10,
            fontSize: 15,
            padding: 25,
          }}
          value={user}
          onChange={(e) => setAUser(e.target.value)}
          placeholder="Write Your Name"
        ></input>
        <button onClick={() => handleSetUser()} style={button}>
          Search
        </button>
      </div>
    </div>
  );
}
