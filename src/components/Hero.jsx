import React from "react";
import CountDownLogo from "./CountDownLogo";
import Nav from "./Nav";
import Modal from "./Modal";

export default function Hero(props) {
  return (
    <div
      className={`hero App-page d`}
      style={{
        background: `url(${process.env.PUBLIC_URL}/images/wave.svg) center no-repeat`,

        height: "100%",
        backgroundPosition: "bottom",
        backgroundSize: "100%",
        backgroundColor: "#F1FF38",
      }}
    >
      {/* <div id="home" className={`hero `}></div> */}
    <Nav /> 
     
      <div className="hero__content">
        <div className="conatiner">
          <h1 className="hero__title">يمكننا تغيير المناخ.</h1>
          <div className="countdown-rec">
          
          <img  src={`${process.env.PUBLIC_URL}/images/logo-colored.svg`} alt=""/>
          </div>
          <h2 className="hero__subtitle">من اجل مستقبل تووووحيف</h2>
          {/* <p className="hero__description">
            Your Innovation and creative award.
          </p> */}
          {/* <input
            type="button"
            value="next"
            onClick={props.onClick}
            disabled={props.disabled}
            className="cta-btn cta-btn--border "
          /> */}
        </div>
      </div>
      <Modal />

    </div>
  );
}
