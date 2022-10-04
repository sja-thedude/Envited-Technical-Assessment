import React from 'react';
import { Link } from 'react-router-dom';
import EventPhoto from '../img/eventphoto.jpeg';
import '../styles/create.css';

function EventPage() {
  return (
    <section className="create-page">
      <form>
        <label className="eventname">
          Event Name: 
          <input type="text" name="Event name" />
        </label>
        <label className="hostname">
          Host Name:
          <input type="text" name="Host name" />
        </label>
        <label className="startdate">
          Start Date:
          <input type="date" name="Startdate" />
        </label>
        <label className="enddate">
          End Date:
          <input type="date" name="Enddate" />
        </label>   
        <label className="location">
          Location: 
          <input type="date" name="Location" />
        </label> 
          <img class="evepho" src={EventPhoto} alt="Birthdaycake" />
</form>
      <div className="nextbtn">
        <ul className="nextnav">
          <li className="itemnext">
            <Link to="/Event" className="n-link">Event</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default EventPage;
