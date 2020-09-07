import React from "react";

import Stepper from './Stepper';

import "./App.css";

function App() {
  // 'step' function will be called each time browser rerender the content
  // we achieve that by passing 'step' as a parameter to the 'requestAnimationFrame' function
const [state, setstate] = React.useState(1)
const [imagePath, setimagePath] = React.useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941")
const [totalFrames, settotalFrames] = React.useState(18)
const [frameNumber, setframeNumber] = React.useState(1)
const [animationDuration, setanimationDuration] = React.useState(2000)
const [timeWhenLastUpdate, settimeWhenLastUpdate] = React.useState()
const [timeFromLastUpdate, settimeFromLastUpdate] = React.useState()
const [timePerFrame, settimePerFrame] = React.useState(animationDuration / totalFrames)
  // const $element = document.getElementById("eye-animation");

  // const imagePath = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941";
  // const totalFrames = 18;
  // const animationDuration = 1300;
  // const timePerFrame = animationDuration / totalFrames;
  // let timeWhenLastUpdate;
  // let timeFromLastUpdate;
  // let frameNumber = 1;
  React.useEffect(() => {
    const step = function (startTime) {
      // 'startTime' is provided by requestAnimationName function, and we can consider it as current time
      // first of all we calculate how much time has passed from the last time when frame was update
      if (!timeWhenLastUpdate) settimeWhenLastUpdate( startTime);
     settimeFromLastUpdate(startTime - timeWhenLastUpdate);
  
      // then we check if it is time to update the frame
      if (timeFromLastUpdate > timePerFrame) {
        // and update it accordingly
        // $element.attr("src", imagePath + `/Eye-${frameNumber}.svg`);
        setstate(frameNumber)
        // reset the last update time
        settimeWhenLastUpdate(startTime);
  
        // then increase the frame number or reset it if it is the last frame
        if (frameNumber >= totalFrames) {
           setframeNumber(1) 
          return
        } else {
          setframeNumber(frameNumber + 1)
        }
      }
    };
    
    requestAnimationFrame(step);

    return () => {};
  },[frameNumber,timeWhenLastUpdate,totalFrames,timeFromLastUpdate,timePerFrame]);

  return (
    <div className="App">
      <h2 class="animation-title">Frame by Frame Animation (JavaScript)</h2>
      <img
        class="eye-animation"
        id="eye-animation"
        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Eye-${state}.svg`}
        alt="blinking eye animation"
      />
        <img
        class="eye-animation"
        id="eye-animation"
        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Eye-${1}.svg`}
        alt="blinking eye animation"
      />
      <div
        id={`preload-image-0`}
        style={{backgroundImage: `url(${imagePath}/Eye-4.svg)`}}
      ></div>
       <div
        id={`preload-image-1`}
        style={{backgroundImage: `url(${imagePath}/Eye-1.svg)`}}
      ></div>
       <div
        id={`preload-image-2`}
        style={{backgroundImage: `url(${imagePath}/Eye-2.svg)`}}
      ></div>
       <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-3.svg)`}}
      ></div>
        <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-4.svg)`}}
      ></div>
        <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-5.svg)`}}
      ></div>
       <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-6.svg)`}}
      ></div>
       <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-7.svg)`}}
      ></div>
       <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-8.svg)`}}
      ></div>
         <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-9.svg)`}}
      ></div>
         <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-10.svg)`}}
      ></div>
         <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-11.svg)`}}
      ></div>
         <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-12.svg)`}}
      ></div>
         <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-13.svg)`}}
      ></div>
         <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-14.svg)`}}
      ></div>
         <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-15.svg)`}}
      ></div>
         <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-16.svg)`}}
      ></div>
         <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-17.svg)`}}
      ></div>
         <div
        id={`preload-image-3`}
        style={{backgroundImage: `url(${imagePath}/Eye-18.svg)`}}
      ></div>
      <Stepper/>
    </div>
  );
}

export default App;
