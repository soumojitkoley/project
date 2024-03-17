import React, { useState } from 'react'
import data from '../data/details.js'
import './People.css'
import { Fade } from 'react-awesome-reveal';
const People = () => {

  const [team, setTeam] = useState(data);
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
                  <Fade duration={2000}>
                  <div key={perPerson.id} className='people-image-container'>
                    <img src="https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLHBvcnRyYWl0fHx8fHx8MTcxMDY2MzYyMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400" alt="" />
                    <p className='person-p-name'>{perPerson.name}</p>
                    <p className='person-p-role'>{perPerson.role}</p>
                  </div>
                  </Fade>
                </div>
                <div class="flip-card-back">
                  <img src="https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLHBvcnRyYWl0fHx8fHx8MTcxMDY2MzYyMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400" alt="" />
                  <p className='person-p-bio'>{perPerson.bio}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default People