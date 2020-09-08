import React from "react";

export default function Nav(props) {
  const tedxImg =(
    <img
      src={`${process.env.PUBLIC_URL}/images/logotedx.svg`}
      alt="tedxsanaa"
      className={`logo`}
    />
  );
  const countImg =(
    <img
      src={`${process.env.PUBLIC_URL}/images/logo-colored-empty.svg`}
      alt="count down"
      className={`logo`}
    />
  );
  const countImgBlack =(
    <img
      src={`${process.env.PUBLIC_URL}/images/logo-dark.svg`}
      alt="count down"
      className={`logo`}
    />
  );
  return (
    <>
      {!props.full && (
        <div className="container container-big nav row justify-center align-center">{tedxImg}</div>
      )}
      {props.full &&props.black&&(
        <div
          className={`container container-big nav ${
            props.black ? "nav__black" : props.yellow ? "nav__yellow" : ""
          }  row justify-between align-center`}
        >
          {countImg}
          {countImg}
        </div>
      )}
       {props.full && props.yellow && (
        <div
          className={`container container-big nav ${
            props.black ? "nav__black" : props.yellow ? "nav__yellow" : ""
          }  row justify-between align-center`}
        >
          {tedxImg}
          {countImgBlack}
        </div>
      )}
    </>
  );
}
