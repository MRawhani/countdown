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
    
        {/* <img src={`${process.env.PUBLIC_URL}/images/logo-dark.svg`} alt=""/> */}
        <div className=" about__content row flexColumn ">
          <div className="mg-top col-3 container-big about__trans row align-center flex-wrap justify-start">
            <h1 className="title col-4">عن تيد</h1>
            <p className="col-6">
              محمد سمنى بميسىر سيمةشرى شقثكب ار منيسةؤ ىتنلا رشتيس ىنمىر ش تنبسى
              رنمىش ت ىرنم  مشنىبرك شخيسى رنمxثشةيرنمىخقثاعثقلارمنىن مشقىبس ري
              خشىبرى عهلاتىشق ثرىخب مينشىرب نمىرث بيرىتب
            </p>
          </div>
          <div className="col-3 mg-top  container-big-left ">
            <div className="row align-center about__black justify-end flex-wrap">
              <h1 className="title col-4">ماهو تيدكس</h1>
              <p className="col-5">
                 محمد سمنى بميسىر سيمة شرىشق ثكبار منيسةؤ ىتنلا رشتيس ىن مىرش تنبسى
              رنمىش ت ىرنم  مشنىبرك شخيسى رنمxثشةيرنمىخقثاعثقلارمنىن مشقىبس ري
              خشىبرى عهلاتىشق ثرىخب مينشىرب نمىرث بيرىتب
              </p>
            </div>
          </div>
          <div className="col-3 mg-top container-big about__trans row align-center flex-wrap justify-start">
            <h1 className="title col-4">ماهو تيدكس صنعاء</h1>
            <p className="col-6">
            محمد سمنى بميسىر سيمةشرىشق ثكبار  منيسةؤ ىتنلا رشتيس ىنمىرش  تنبسى
              رنمىش ت ىرنم  مشنىبرك شخيسى رنمxثشةيرنمىخقثاعثقلارمنىن مشقىبس ري
              خشىبرى عهلاتىشق ثرىخب مينشىرب نمىرث بيرىتب    
            </p>
          </div>
          <div className="col-3  mg-top container-big-right ">
            <div className="row flex-wrap align-center about__black justify-center">
              <h1 className="title col-4">حدث العد التنازلي</h1>
              <p className="col-6">
                 محمد سمنى بميسىر سيمة شرىشق ثكبار منيسةؤ ىتنلا رشتيس ىن مىرش تنبسى
              رنمىش ت ىرنم  مشنىبرك شخيسى رنمxثشةيرنمىخقثاعثقلارمنىن مشقىبس ري
              خشىبرى عهلاتىشق ثرىخب مينشىرب نمىرث بيرىتب
              </p>
            </div>
          </div>
        </div>
     

      {/* <img  src={`${process.env.PUBLIC_URL}/images/logo-colored.svg`} alt=""/>
       */}
    </div>
  );
}
