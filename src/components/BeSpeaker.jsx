import React from "react";
import Nav from "./Nav";
import Modal from "./Modal";

export default function BeSpeaker() {
  return (
    <div
      className={`hero App-page topic`}
      style={{
        background: `url(${process.env.PUBLIC_URL}/images/yellow_wave.svg) center no-repeat`,

        height: "100%",
        backgroundPosition: "bottom",
        backgroundSize: "100%",
      }}
    >
      <Nav full black />
      <div className="row justify-between align-center mg-top-big">
        <div className="col col-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/man.svg`}
            alt="متحدث كاونت داون"
          />
        </div>
        <div className="col col-3">
            <Modal />
        </div>
        <div className="col col-4">
        <img
            src={`${process.env.PUBLIC_URL}/images/woman.svg`}
            alt="متحدثة كاونت داون"
          />
        </div>
      </div>
    </div>
  );
}
