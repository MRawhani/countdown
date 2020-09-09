import React from "react";
import Nav from "./Nav";

export default function Topics() {
  return (
    <div
      className={` App-page topic`}
      style={{
        background: `url(${process.env.PUBLIC_URL}/images/yellow_wave.svg) center no-repeat`,

        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
    >
      <Nav full yellow />

      <div className="row flexColumn justify-between h-100">
        <h1 className="col text-center col-2 title mg-top">مجالات حدث العد التنازلي</h1>
        <div className="col text-center col-5">
          <img
            src={`${process.env.PUBLIC_URL}/images/house.svg`}
            alt="tedxsanaa"
            className={`topics-img`}
          />
        </div>
        <div
          className="col col-5 row justify-center"
          style={{
            backgroundColor: "#F1FF38",
          }}
        >
          <div
            className="col col-2 position-relative topics__black"
            //   style={{paddingTop:'45px'}}
          >
            <img
              style={{ width: "150px" }}
              src={`${process.env.PUBLIC_URL}/images/nature.svg`}
              alt=""
            />
            <h1 className="title">الطبيعة</h1>
          </div>
          <div className="col col-2 position-relative topics__yellow">
            <img
              style={{ width: "50px" }}
              src={`${process.env.PUBLIC_URL}/images/material.svg`}
              alt=""
            />
            <h1 className="title">المواد</h1>
          </div>
          <div className="col col-2 position-relative topics__black">
              
            <img
              style={{ width: "50px" }}
              src={`${process.env.PUBLIC_URL}/images/food.svg`}
              className="tall"
              alt=""
            />
            <h1 className="title">الطعام</h1>
          </div>
          <div className="col col-2 position-relative topics__yellow">
            <img
              style={{ width: "50px" }}
              src={`${process.env.PUBLIC_URL}/images/transportation.svg`}
              alt=""
            />
            <h1 className="title">المواصلات</h1>
          </div>

          <div className="col col-2 position-relative topics__black">
            
              <img
                style={{ width: "50px" }}
                src={`${process.env.PUBLIC_URL}/images/power.svg`}
                alt=""
              />
              <h1 className="title">الطاقة</h1>
           
          </div>
        </div>
      </div>
    </div>
  );
}
