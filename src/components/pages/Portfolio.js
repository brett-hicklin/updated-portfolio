import React, { useState } from 'react';
import RipeTomatoes from '../../assets/images/RipeTomatoes.png';
import MMM from '../../assets/images/MMM.png';
import Jate from '../../assets/images/Jate.png';
import WeatherDashboard from '../../assets/images/Weather-Dashboard-2.png';
import Scheduler from '../../assets/images/workday-scheduler.png';
import PwGenerator from '../../assets/images/password-generator-1.png';

function Portfolio() {
  return(
    <div className="flexbox-container">

    <a href="https://jdeshaies.github.io/movie-search-project/index.html" target="_blank">
      <img className="item item1" src={RipeTomatoes} alt="Ripe Tomates movie search" height="250px"
        width="250px"/>
    </a>
    
    <a href="https://cryptic-brushlands-31143.herokuapp.com/" target="_blank">
      <img className="item item2" src={MMM} alt="recipe storing website" height="250px" width="200px"/> </a>
    
      <a href="https://radiant-mesa-13159.herokuapp.com/" target="_blank">
        <img className="item item2" src={Jate} alt="text editor" height="150px" width="175px"/> </a>


    <a href="https://brett-hicklin.github.io/weather-dashboard/" target="_blank">
      <img className="item item3" src={WeatherDashboard} alt="open book" height="150px" width="175px"/>
    </a>

    <a href="https://brett-hicklin.github.io/work-day-scheduler/" target="_blank">
      <img className="item item3" src={Scheduler} alt="open book" height="150px" width="175px"/>
    </a>

    <a href="https://brett-hicklin.github.io/password-generator/" target="_blank">
      <img className="item item3" src={PwGenerator} alt="open book" height="150px" width="175px"/>
    </a>
   
  </div>
  )
}

export default Portfolio;
