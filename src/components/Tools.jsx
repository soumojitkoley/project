import React from 'react'
import Marquee from "react-fast-marquee";
import './Tools.css'
const Tools = () => {
  return (
    <div className='tools-main-div'>
      <h2 align="left" style={{ textAlign: 'center' }}>Languages and Tools:</h2>
        <Marquee speed={80}>
          <div className='infinity-scroll'>
            <img src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fadobe-photoshop-2023-0061%2FAdobe_Photoshop_CC_icon.png&w=128&q=75" alt="ps" width="40" height="40" className="images first-image" />
            <img src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fadobe-premiere-pro-0036%2FAdobe_Premiere_Pro_CC.png&w=128&q=75" alt="ppro" width="40" height="40" className="images" />
            <img src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fadobe-illustrator-2022-0042%2FAdobe_Illustrator_CC_icon.png&w=128&q=75" alt="ai" width="40" height="40" className="images" />
            <img src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fadobe-after-effects-0032%2FAdobe_After_Effects_CC_icon.png&w=128&q=75" alt="firebase" width="40" height="40" className="images" />
            <img src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fadobe-xd-cc-0003%2FAdobe_XD_CC_icon.png&w=128&q=75" alt="java" width="40" height="40" className="images" />
            <img src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fborisfx-mocha%2FIcon_Mocha-Pro_free-download.png&w=128&q=75" alt="git" width="40" height="40" className="images" />
            <img src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fthe-foundry-nuke-studio%2FNuke-Studio.png&w=128&q=75" alt="mysql" width="40" height="40" className="images" />
          </div>
        </Marquee>
        <Marquee speed={80} direction='right'>
          <div className='infinity-scroll'>
            <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" className="images first-image" />
            <img src="https://filecr.com/_next/image/?url=https%3A%2F%2Fmedia.imgcdn.org%2Frepo%2F2023%2F03%2Fvisual-studio-code%2FVisual_Studio_Code.png&w=128&q=75" alt="vs code" width="40" height="40" className="images" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" className="images" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" className="images" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" className="images" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" className="images" />
            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" className="images" />
            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" className="images" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" className="images" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" className="images" />
          </div>
        </Marquee>
    </div>
  )
}

export default Tools