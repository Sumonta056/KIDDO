import React, { useState } from "react";
import { CommentOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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

export default function Emergency() {
  const navigate = useNavigate();
  const [user, setAUser] = useState("");
  const [userType, setUserType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  function handleSetUser() {
    if (!user) return;

    alert("Succesfully Booked a Appointment with Advisior");
    navigate("/");
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
        <input
          type="date" // Date input
          style={{
            margin: 10,
            height: 50,
            width: "30%",
            borderRadius: 10,
            borderWidth: 1,
            fontSize: 15,
            padding: 20,
          }}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
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
          Book
        </button>
      </div>
    </div>
  );
}
