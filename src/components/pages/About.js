import React from "react";
import RecentPicture from "../../assets/images/Brett.jpg";

export default function About(props) {
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <h2 id="aboutme">About Me</h2>
      <img
        src={RecentPicture}
        alt="Avatar"
        style={{ width: "150px", borderRadius: "10%" }}
      />
      <p>
        I am Brett Hicklin, and I'm currently enrolled in a coding bootcamp
        where I have learned about several topics, including, but not limited
        to:
      </p>
      <ul>
        <li>Javascript</li>

        <li>APIs</li>

        <li>Progressive Web Applications</li>

        <li>Node.js</li>
      </ul>

      <p>
        {" "}
        After completing this Bootcamp, it is my goal to find an entry level
        position in coding. My previous work background includes electronics
        repair and overhaul on nuclear powered submarines as well as calibration
        of electrical test equipment
      </p>
    </div>
  );
}
