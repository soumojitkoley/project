import React, { useEffect, useState } from 'react'
import data from '../data/details.js'
import './People.css'
import { Fade, Slide } from 'react-awesome-reveal';
import { useLocation } from "react-router-dom";
const People = () => {
  const [team, setTeam] = useState(data)

  useEffect(()=> {
    const isAboutPage = location.pathname === '/about'
    if(isAboutPage) {
      
    }
  },[])


  return (
    <div className='people-main-div'>
      <div className="people-title">
        <h1>Meet Our Team</h1>
      </div>
      <div className="people-image-part">
        {
          team.map((perPerson) => (
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <Fade delay={500} duration={1500}>
                    <div key={perPerson.id} className='people-image-container'>
                      <img src={perPerson.src} alt="" />
                    </div>
                    <div className='blur'>
                        <p className='person-p-name'>{perPerson.name}</p>
                        <p className='person-p-role'>{perPerson.role}</p>
                    </div>
                  </Fade>
                </div>
                <div class="flip-card-back">
                  <img src={perPerson.src} alt="" />
                  <p className='person-p-bio'>{perPerson.bio}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {
          team.map((perPerson) => (
            <>
            </>
          ))
        }
    </div>
  )
}

export default People
