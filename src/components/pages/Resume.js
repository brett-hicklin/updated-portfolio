import React from "react";
import resume from "../../assets/resume.pdf";

export default function Resume() {
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <h3>Skills:</h3>
      <ul>
        <li>
          Self learner with a proven ability to learn new concepts quickly
        </li>

        <li>Active listener and collaborator</li>

        <li>Communicate complex thoughts and ideas to peers</li>

        <li>Team collaborator</li>

        <li>Experience in Javascript</li>

        <li>Experience with the MVC paradigm</li>

        <li>Experience with object oriented programming</li>

        <li>Experience using SQL and NoSQL</li>
      </ul>

      <p>If you'd like to learn more about me, please check out my resume</p>
      <a
        href={resume}
        download="resume.pdf"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#2196f3",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "4px",
          fontWeight: "bold",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease",
        }}
      >
        Download Resume
      </a>
    </div>
  );
}
