import React from 'react';
import { Link } from 'react-router-dom';
import LandImg from '../img/Landimg.svg';
import '../styles/Home.css';

function Home() {
  return (
    <section className="home-page">
      <h2 className="texth2">
        Imagine if
        <div className="snap">Snapchat</div>
        <div className="text">had events.</div>
      </h2>
      <p className="parahome">
        Easily host and share events with your friends across any social media.
      </p>
      <img src={LandImg} alt="LandingImg" />
      <div className="btn">
        <ul className="list-nav">
          <li className="item-nav">
            <Link to="/Create" className="n-link">🎉 Create my event</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
