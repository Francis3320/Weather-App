import React from "react";

import "./home.css";

import { Link } from "react-router-dom";

function Home() {
    return (
   <div className="main">
          <header>
             <h1>Weather App For JHS Students</h1>
               <p>Lets tell the weather together!</p>
          </header>
      <div class="container">
             <h1 className="how-to">How to Use the App</h1>
            <div class="steps">
               <div class="step">
                  <h3>Step 1</h3>
                  <p><label>1:</label> Click on the button below</p>
               </div>
                  <div class="step">
                     <h3>Step 2</h3>
                     <p><label>2:</label> Search for a country or city of interest</p>
                  </div>
                     <div class="step">
                        <h3>Step 3</h3>
                        <p><label>3:</label> Then, click on a day to see the weather conditions</p>
                     </div>
            </div>
         <Link to="/weather">
             <div class="button-container">
             <button class="get-started-button">Get Started</button>
             </div>
         </Link> 
      </div>
   </div>  
    );
  }

  export default Home;



