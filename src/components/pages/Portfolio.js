import React from 'react';
import RipeTomatoes from '../../assets/images/RipeTomatoes.png';
import MMM from '../../assets/images/MMM.png';
import Jate from '../../assets/images/Jate.png';
import WeatherDashboard from '../../assets/images/Weather-Dashboard-2.png';
import Scheduler from '../../assets/images/workday-scheduler.png';
import PwGenerator from '../../assets/images/password-generator-1.png';
import '../../Portfolio.css'

function Portfolio() {
  return (
    <div className="flexbox-container">
      <div className="item-container">
        <a href="https://jdeshaies.github.io/movie-search-project/index.html" target="_blank">
          <img src={RipeTomatoes} alt="Ripe Tomates movie search" />
        </a>
        <a href="https://github.com/brett-hicklin/movie-search-project" target="_blank" >Ripe Tomatoes Repo</a>
      </div>

      <div className="item-container">
        <a href="https://cryptic-brushlands-31143.herokuapp.com/" target="_blank">
          <img src={MMM} alt="recipe storing website" />
        </a>
        <a href="https://github.com/brett-hicklin/Mmm-My-Menu-Memory-App" target="_blank">My Menu Memory Repo</a>
      </div>

      <div className="item-container">
        <a href="https://radiant-mesa-13159.herokuapp.com/" target="_blank">
          <img src={Jate} alt="text editor" />
        </a>
        <a href="https://github.com/brett-hicklin/text-editor" target="_blank">Just Another Text Editor Repo</a>
      </div>

      <div className="item-container">
        <a href="https://brett-hicklin.github.io/weather-dashboard/" target="_blank">
          <img src={WeatherDashboard} alt="weather dashboard" />
        </a>
        <a href="https://github.com/brett-hicklin/weather-dashboard" target="_blank">Weather Dashboard Repo</a>
      </div>

      <div className="item-container">
        <a href="https://brett-hicklin.github.io/work-day-scheduler/" target="_blank">
          <img src={Scheduler} alt="workday scheduler" />
        </a>
        <a href="https://github.com/brett-hicklin/work-day-scheduler" target="_blank">Workday Scheduler Repo</a>
      </div>

      <div className="item-container">
        <a href="https://brett-hicklin.github.io/password-generator/" target="_blank">
          <img src={PwGenerator} alt="secure password generator" />
        </a>
        <a href="https://github.com/brett-hicklin/password-generator" target="_blank">Password Generator Repo</a>
      </div>
    </div>
  );
}

export default Portfolio;

