import React, { useState } from 'react'
import data from '../data/reviewData'
import Marquee from "react-fast-marquee";
import { useMediaQuery } from 'react-responsive'
import { Typewriter } from 'react-simple-typewriter'
import './Review.css'

const Review = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [allReviews, setAllReviews] = useState(data);

  return (
    <div className='review-main-div'>
      <div className="review-title">
        {
          isMobile ?
            (
              <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                What Our Clients Say<br />{' '}
                <span style={{ color: '#de844c', fontWeight: 'bold' }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={['about our service', 'about our team', 'about our quality', 'about experience']}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            )
            :
            (
              <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                What Our Clients Say{' '}
                <span style={{ color: '#de844c', fontWeight: 'bold' }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={['about our service', 'about our team', 'about our quality', 'about their experience']}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            )
        }
      </div>
      <div className="top-part">
        <div className="top-image-part">
          <img src="https://images.prismic.io/memoriesdesigner/5b868fa9-7b82-44dd-a8b3-407a800e5044_ABH_0227.JPG?auto=compress,format&rect=0,0,4128,4128&w=650&h=650" alt="" />
        </div>
        <div className="top-review-part">
          <div className="top-cmt-part">
            <p>"The photography and videography services offered by your team are simply exceptional! Each photograph and video beautifully captured the essence of the event, and the attention to detail was evident in every frame. The editing added an extra layer of creativity and elegance to the visuals, making them truly stand out. I am beyond satisfied with the results and would highly recommend your services to anyone in need of professional photography and videography."</p>
          </div>
          <div className='top-image-part-small-div'>
            <div className="top-image-part-small">
              <img src="https://images.prismic.io/memoriesdesigner/5b868fa9-7b82-44dd-a8b3-407a800e5044_ABH_0227.JPG?auto=compress,format&rect=0,108,4128,4128&w=100&h=100" alt="" />
            </div>
            <p>Anushka Sharma</p>
          </div>
        </div>
      </div>
      <Marquee pauseOnHover={true} speed={80} pauseOnClick={true}>
        <div className="bottom-part">
          {
            allReviews.map((perReview, index) => (
              <div key={perReview.id} className={`per-review ${index === allReviews.length - 1 ? 'last-review' : ''}`}>
                <div className='bottom-review-wrapper'>
                  <div className='bottom-image-name'>
                    <div className="bottom-image-part">
                      <img src={perReview.src} alt="" />
                    </div>
                    <p>{perReview.name}</p>
                  </div>
                  <div className="bottom-cmt-part">
                    <p>{`"${perReview.comment}"`}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </Marquee>
    </div>
  )
}

export default Review