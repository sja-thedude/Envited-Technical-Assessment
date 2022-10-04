import React from 'react';
import Birthcake from '../img/Birthdaycake.png';
import '../styles/Event.css';

function Event() {
  return (
    <section className="home-page">
      <img src={Birthcake} alt="Birthdaycake" />
      <h2 className="bash">Birthday Bash</h2>
      <p className="bashpara">
        Hosted by Elysia
      </p>
      <div className="date">
        <div>🗓️</div>
        <div>
          <h4 className="one">18 August 6:00PM</h4>
        <p className="two">19 August 1:00PM UTC +10</p>
        </div>
        
      </div>
      <div className="stname">
        <div className="loc">📍</div>
        <div>
          <h4 className="one">Street</h4>
        <p className="two">Suburb, State, Postcode</p>
        </div> 
      </div>
    </section>
  );
}

export default Event;
