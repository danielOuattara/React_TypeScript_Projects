/* Comment:

How to smoothly toggle links:

1- dynamic class with animation
  <div className={showLinks ? "links-container show-container" :"links-container"}>

  But the "show-container" class has a limitation: 10rem hard coded. 
  How to handle case where links quantity could change, so the height 
  of the links panel ?

2- "useRef" + DOM "getBoundingClientRect()" method  to handle the 
    previous situation

------------------------------------------- */

import { Component, createRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./../data";
import logo from "./../logo.svg";

type StateType = {
  showLinks: boolean;
};

export default class Navbar extends Component {
  state: StateType = {
    showLinks: false,
  };

  linksRef = createRef<HTMLUListElement>();
  linksContainerRef = createRef<HTMLDivElement>();

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: StateType,
    snapshot?: any,
  ): void {
    if (prevState.showLinks !== this.state.showLinks) {
      const linksHeight = this.linksRef.current?.getBoundingClientRect();
      if (this.linksContainerRef && this.linksContainerRef.current) {
        if (this.state.showLinks) {
          this.linksContainerRef.current.style.height = `${linksHeight?.height}px`;
        } else {
          this.linksContainerRef.current.style.height = "0px";
        }
      }
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-center">
          {/* ---------------------------------------------------- */}
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button
              className="nav-toggle"
              onClick={() =>
                this.setState({ showLinks: !this.state.showLinks })
              }
            >
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={this.linksContainerRef}>
            <ul className="links" ref={this.linksRef}>
              {links.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* ---------------------------------------------------- */}
          <ul className="social-icons">
            {social.map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            ))}
          </ul>
          {/* ---------------------------------------------------- */}
        </div>
      </nav>
    );
  }
}
