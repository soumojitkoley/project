import React, { useEffect, useState } from 'react';
import data from '../data/peopleData.js';
import './People.css';
import { Fade } from 'react-awesome-reveal';
import { useLocation } from "react-router-dom";

const People = () => {
  const [team, setTeam] = useState(data);
  const location = useLocation();

  useEffect(() => {
    const isContactPage = location.pathname === '/contact';
    if (isContactPage) {
      const headLead = team.filter((t) => t.id === 5 || t.id === 6);
      setTeam(headLead);
    } else {
      setTeam(data); 
    }
  }, []);

  const handleContactClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className='people-main-div'>
      <div className="people-title">
        {team.length === 2 ? (<h1>Talk to us about your project</h1>) : (<h1>Meet Our Team</h1>)}
      </div>
      <div className="people-image-part">
        {team.map((perPerson) => (
          <div className="flip-card" key={perPerson.id} onClick={team.length === 2 ? ()=> handleContactClick(perPerson.email) : null}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Fade delay={500} duration={1500}>
                  <div className='people-image-container'>
                    <img src={perPerson.src} alt="" />
                  </div>
                  <div className='blur'>
                    <p className='person-p-name'>{perPerson.name}</p>
                    <p className='person-p-role'>{perPerson.role}</p>
                  </div>
                </Fade>
              </div>
              <div className="flip-card-back">
                <img src={perPerson.src} alt="" />
                <p className='person-p-bio'>{perPerson.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;
