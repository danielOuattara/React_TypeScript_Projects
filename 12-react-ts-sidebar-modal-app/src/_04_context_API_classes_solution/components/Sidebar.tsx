import { Component } from "react";
import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "../data";
import { AppContext } from "../context/AppContext";

export default class Sidebar extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) =>
          context && (
            <aside
              className={
                context.isSideBarOpen ? "sidebar show-sidebar" : "sidebar"
              }
            >
              <div className="sidebar-header">
                <img src={logo} alt="coding addict" className="logo" />
                <button
                  className="close-btn"
                  onClick={() => context.toggleSideBar(!context.isSideBarOpen)}
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="links">
                {links.map((item) => (
                  <li key={item.id}>
                    {" "}
                    <a href={item.url}>
                      {item.icon}
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="social-icons">
                {social.map((item) => (
                  <li key={item.id}>
                    <a href={item.url}>{item.icon}</a>
                  </li>
                ))}
              </ul>
            </aside>
          )
        }
      </AppContext.Consumer>
    );
  }
}
