import React from "react";
import Nav from "./Nav";

export default function Topics() {
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
      <Nav full yellow />
   
      <div className="row flexColumn h-100">
        <div className="col col-7">
          <h1 className="title mg-top">مجالات حدث العد التنازلي</h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/house.svg`}
            alt="tedxsanaa"
            className={`topics-img`}
          />
        </div>
        <div className="col col-5 row justify-center"   style={{
       
        backgroundColor: "#F1FF38",
      }}>
          <div className="col col-2 topics__black"
        //   style={{paddingTop:'45px'}}
          
          >
             <div className="position-middle">
             <img
              style={{width:'150px'}}
              src={`${process.env.PUBLIC_URL}/images/nature.svg`} alt=""/>
              <h1 className="title">الطبيعة</h1>
             </div>
          </div>
          <div className="col col-2 topics__yellow">
              <div className="position-middle">

               <img
              style={{width:'50px'}}
               
               src={`${process.env.PUBLIC_URL}/images/material.svg`} alt=""/>
              <h1 className="title">المواد</h1>
              </div>
          </div>
          <div className="col col-2 topics__black"
          
          >
              <div className="position-middle">
              <img 
          
          style={{width:'50px'}}
          src={`${process.env.PUBLIC_URL}/images/food.svg`} alt=""/>
              <h1 className="title">الطعام</h1>
        </div>
          </div>
          <div className="col col-2 topics__yellow">
          <div className="position-middle">
          <img
          
          style={{width:'50px'}}
          src={`${process.env.PUBLIC_URL}/images/transportation.svg`} alt=""/>
              <h1 className="title">المواصلات</h1>
              </div>
         
          </div>
          <div className="col col-2 topics__black"
         
          
          >
          <div className="position-middle">
          <img
              style={{width:'50px'}}

          src={`${process.env.PUBLIC_URL}/images/power.svg`} alt=""/>
              <h1 className="title">الطاقة</h1>
</div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
