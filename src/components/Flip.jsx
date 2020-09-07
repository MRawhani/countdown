import React, { Component } from "react";
import FlippingPages from "flipping-pages";
/* IMPORTANT */
import Hero from "./Hero";
import About from "./About";
import Modal from "./Modal";
import "flipping-pages/FlippingPages.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.totalPages = 4;
    this.totasublPages = 4;
    this.state = {
      selected: 0,
      subselected: 0,
    };
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  handleSelectedChange(selected) {
    this.setState({ selected });
  }

  previous() {
    this.setState((state) => ({
      selected: state.selected - 1,
    }));
  }

  next() {
    this.setState((state) => ({
      selected: state.selected + 1,
    }));
  }
  handlesubselectedChange = (subselected) => {
    this.setState({ subselected });
  };

  subprevious = () => {
    this.setState((state) => ({
      subselected: state.subselected - 1,
    }));
  };

  subnext = () => {
    this.setState((state) => ({
      subselected: state.subselected + 1,
    }));
  }; 

  render() {
    return (
      <div className="aa">
       <div id="hideOnModal" className="ase">
       <FlippingPages
          className="App-pages"

          direction="vertical"
          selected={this.state.selected}
         shadowBackground="rgba(0,0,0,1 )"
         animationDuration={400}
          onSelectedChange={this.handleSelectedChange}
          /* touch-action attribute is required by pointer events
                    polyfill */
          touch-action="none"
        >
          <Hero onClick={this.next}
          disabled={this.state.selected + 1 === this.totalPages}/>
          <About onClick={this.next}
          disabled={this.state.selected + 1 === this.totalPages}/>
          <Hero onClick={this.next}
          disabled={this.state.selected + 1 === this.totalPages}/>
          <About onClick={this.next}
          disabled={this.state.selected + 1 === this.totalPages}/>
          <Hero onClick={this.next}
          disabled={this.state.selected + 1 === this.totalPages}/>
          <About onClick={this.next}
          disabled={this.state.selected + 1 === this.totalPages}/>
          <div className="App-page App-page_green">
            1
            <FlippingPages
              className="App-pages"
              direction="horizontal"
              selected={this.state.subselected}
              onSelectedChange={this.handlesubselectedChange}
              /* touch-action attribute is required by pointer events
                    polyfill */
              touch-action="none"
            >
              <div>;sdlmc;vkdfsmvklnrelkanfovbaeisbcasdn</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                mollitia possimus quae optio quasi, necessitatibus dolore
                nesciunt quis quaerat alias fugiat? Repudiandae quia debitis
                facilis dolorem in totam quisquam quasi!
              </div>
            </FlippingPages>
          
          </div>
          <div className="App-page App-page_blue">2</div>
          <div className="App-page App-page_orange">3</div>
        </FlippingPages>
        {/* Buttons are required for keyboard navigation */}
     
    
       </div>
        <div className="arrow-dev">
        <button onClick={this.previous} disabled={!this.state.selected}>
          Previous
        </button>
        <button
          onClick={this.next}
          disabled={this.state.selected + 1 === this.totalPages}
        >
          Next
        </button>
        </div>
        <Modal />

      </div>
    );
  }
}

export default App;
