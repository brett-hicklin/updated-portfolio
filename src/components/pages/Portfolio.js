import React from "react";
import RipeTomatoes from "../../assets/images/RipeTomatoes.png";
import MMM from "../../assets/images/MMM.png";
import Jate from "../../assets/images/Jate.png";
import WeatherDashboard from "../../assets/images/Weather-Dashboard-2.png";
import Scheduler from "../../assets/images/workday-scheduler.png";
import PwGenerator from "../../assets/images/password-generator-1.png";
import "../../Portfolio.css";

const portfolioItems = [
  {
    id: 1,
    image: RipeTomatoes,
    alt: "Ripe Tomatoes movie search",
    liveLink: "https://jdeshaies.github.io/movie-search-project/index.html",
    repoLink: "https://github.com/brett-hicklin/movie-search-project",
    repoName: "Ripe tomatoes Repo",
  },
  {
    id: 2,
    image: MMM,
    alt: "Recipe storing website",
    liveLink: "https://cryptic-brushlands-31143.herokuapp.com/",
    repoLink: "https://github.com/brett-hicklin/Mmm-My-Menu-Memory-App",
    repoName: "My Menu Memory Repo",
  },

  {
    id: 3,
    image: Jate,
    alt: "Text editor",
    liveLink: "https://radiant-mesa-13159.herokuapp.com/",
    repoLink: "https://github.com/brett-hicklin/text-editor",
    repoName: "Just Another Text Editor Repo",
  },

  {
    id: 4,
    image: WeatherDashboard,
    alt: "Weather dashboard",
    liveLink: "https://brett-hicklin.github.io/weather-dashboard/",
    repoLink: "https://github.com/brett-hicklin/weather-dashboard",
    repoName: "Weather Dashboard Repo",
  },

  {
    id: 5,
    image: Scheduler,
    alt: "workday scheduler",
    liveLink: "https://brett-hicklin.github.io/work-day-scheduler/",
    repoLink: "https://github.com/brett-hicklin/work-day-scheduler",
    repoName: " Workday Scheduler Repo",
  },

  {
    id: 6,
    image: PwGenerator,
    alt: "Secure password generator",
    liveLink: "https://brett-hicklin.github.io/password-generator/",
    repoLink: "https://github.com/brett-hicklin/password-generator",
    repoName: "Password Generator Repo",
  },
];

function Portfolio() {
  return (
    <div className="flexbox-container">
      {portfolioItems.map((item) => (
        <div className="item-container">
          <a href={item.liveLink} target="_blank">
            <img src={item.image} alt={item.alt} />
          </a>
          <a href={item.repoLink} target="_blank">
            {item.repoName}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
