// import React, { Component } from "react";
// import FlippingPages from "flipping-pages";
// /* IMPORTANT */
// import Hero from "./Hero";
// import About from "./About";
// import Modal from "./Modal";
// import Topics from "./Topics";
// import BeSpeaker from "./BeSpeaker";
// import "flipping-pages/FlippingPages.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.totalPages = 4;
//     this.totasublPages = 4;
//     this.state = {
//       selected: 0,
//       subselected: 0,
//     };
//     this.handleSelectedChange = this.handleSelectedChange.bind(this);
//     this.previous = this.previous.bind(this);
//     this.next = this.next.bind(this);
//   }

//   handleSelectedChange(selected) {
//     this.setState({ selected });
//   }

//   previous() {
//     this.setState((state) => ({
//       selected: state.selected - 1,
//     }));
//   }

//   next() {
//     this.setState((state) => ({
//       selected: state.selected + 1,
//     }));
//   }
//   handlesubselectedChange = (subselected) => {
//     this.setState({ subselected });
//   };

//   subprevious = () => {
//     this.setState((state) => ({
//       subselected: state.subselected - 1,
//     }));
//   };

//   subnext = () => {
//     this.setState((state) => ({
//       subselected: state.subselected + 1,
//     }));
//   };

//   render() {
//     return (
//       <div className="aa">
//         <div  className="ase">
//           <FlippingPages
//             className="App-pages"
//             swipeLength={100}
//             thresholdSpeed={2}
//             direction="vertical"
//             selected={this.state.selected}
//             shadowBackground="rgba(0,0,0,.25)"
//             animationDuration={800}
//             onSelectedChange={this.handleSelectedChange}
//             /* touch-action attribute is required by pointer events
//                     polyfill */
//             touch-action="none"
//           >
//             <Hero
//               onClick={this.next}
//               disabled={this.state.selected + 1 === this.totalPages}
//             />
//             <About
//               onClick={this.next}
//               disabled={this.state.selected + 1 === this.totalPages}
//             />
//             <Topics
//               onClick={this.next}
//               disabled={this.state.selected + 1 === this.totalPages}
//             />
//             <BeSpeaker
//               onClick={this.next}
//               disabled={this.state.selected + 1 === this.totalPages}
//             />
           
           
//           </FlippingPages>
//           {/* Buttons are required for keyboard navigation */}
//         </div>
//         <div className="arrow-dev">
//           <img
//             src={`${process.env.PUBLIC_URL}/images/arrow-next.svg`}
//             alt="arrow prev"
//             class="arrow prev"
//             style={{ display: `${this.state.selected ? "block" : "none"}` }}
//             onClick={this.previous}
//           />

//           <img
//             src={`${process.env.PUBLIC_URL}/images/arrow-next.svg`}
//             alt="arrow next"
//             class="arrow next"
//             style={{
//               display: `${
//                 this.state.selected + 1 === this.totalPages ? "none" : "block"
//               }`,
//             }}
//             onClick={this.next}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
