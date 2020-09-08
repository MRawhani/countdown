import React from "react";
import Nav from "./Nav";

export default function About(props) {
  return (
    <div
      style={{
        backgroundColor: "#F1FF38",
      }}
      className="App-page about"
    >
      <Nav full black />
      <div
        style={{
          // background: `url(${process.env.PUBLIC_URL}/images/logo-dark.svg)  no-repeat`,

          height: "100%",
          // opacity: ".1",
          // backgroundPosition: "bottom",
          // backgroundSize: "cover",
        }}
      >
        {/* <img src={`${process.env.PUBLIC_URL}/images/logo-dark.svg`} alt=""/> */}
        <div className=" mg-bottom  about__content row flexColumn h-90">
          <div className="col-3 about__trans row align-center flex-wrap justify-start">
            <h1 className="title col-4">عن تيد</h1>
            <p className="col-6">
              محمد سمنى بميسىر سيمةشرىشقثكبار منيسةؤ ىتنلا رشتيس ىنمىرش تنبسى
              رنمىش تىرنم مشنىبركشخيسىرنمثشةيرنمىخقثاعثقلارمنىنمشقىبسري
              خشىبرىعهلاتىشقثرىخب مينشىربنمىرثبيرىتب
            </p>
          </div>
          <div className="col-3   container-big-left ">
            <div className="row align-center about__black justify-end flex-wrap">
              <h1 className="title col-4">عن تيد</h1>
              <p className="col-6">
                محمد سمنى بميسىر سيمةشرىشقثكبار منيسةؤ ىتنلا رشتيس ىنمىرش تنبسى
                رنمىش تىرنم مشنىبركشخيسىرنمثشةيرنمىخقثاعثقلارمنىنمشقىبسري
                خشىبرىعهلاتىشقثرىخب مينشىربنمىرثبيرىتب
              </p>
            </div>
          </div>
          <div className="col-3 about__trans row flex-wrap align-center justify-start">
            <h1 className="title col-4">عن تيد</h1>
            <p className="col-6">
              محمد سمنى بميسىر سيمةشرىشقثكبار منيسةؤ ىتنلا رشتيس ىنمىرش تنبسى
              رنمىش تىرنم مشنىبركشخيسىرنمثشةيرنمىخقثاعثقلارمنىنمشقىبسري
              خشىبرىعهلاتىشقثرىخب مينشىربنمىرثبيرىتب
            </p>
          </div>
          <div className="col-3   container-big-right ">
            <div className="row flex-wrap align-center about__black justify-center">
              <h1 className="title col-4">عن تيد</h1>
              <p className="col-6">
                محمد سمنى بميسىر سيمةشرىشقثكبار منيسةؤ ىتنلا رشتيس ىنمىرش تنبسى
                رنمىش تىرنم مشنىبركشخيسىرنمثشةيرنمىخقثاعثقلارمنىنمشقىبسري
                خشىبرىعهلاتىشقثرىخب مينشىربنمىرثبيرىتب
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <img  src={`${process.env.PUBLIC_URL}/images/logo-colored.svg`} alt=""/>
       */}
    </div>
  );
}
