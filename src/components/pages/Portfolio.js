import React, { useState } from 'react';


function Portfolio() {
  return(
    <div className="flexbox-container">

    <a href="https://jdeshaies.github.io/movie-search-project/index.html" target="_blank">
      <img className="item item1" src="../../assets/images/RipeTomatoes.png" alt="Ripe Tomates movie search" height="250px"
        width="500px"/>
    </a>
    
    <a href="https://cryptic-brushlands-31143.herokuapp.com/" target="_blank">
      <img className="item item2" src="./Assets/images/MMM.png" alt="recipe storing website" height="250px" width="200px"/> </a>
    
      <a href="https://github.com/brett-hicklin?tab=repositories" target="_blank">
        <img className="item item2" src="./Assets/images/repo.png" alt="file holder" height="150px" width="175px"/> </a>


    <a href="https://brett-hicklin.github.io/prework-study-guide/" target="_blank">
      <img className="item item3" src="./Assets/images/studyguide.png" alt="open book" height="150px" width="175px"/>
    </a>

   
  </div>
  )
}

export default Portfolio;
