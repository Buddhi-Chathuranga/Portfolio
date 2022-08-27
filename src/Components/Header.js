import React, { Component } from "react";
import Typed from "react-typed";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <div className="profile-details-name">
            {/* <Typist>
                < Typist.Delay ms={10}/>
              <span className="primary-text" style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
                {" "}
                Hello, I'M{" "}
                <span className="highlighted-text">Buddhi Chathuranga</span>
              </span>
            </Typist> */}
            <span className="primary-text" style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
                {" "}
                Hello, {" "}<br/><br/>
                
            <Typed
            strings={["I'M Buddhi Chathuranga ", "I'M A Full Stack Developer","I'M A web developer"]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
              </span>



            </div>
            <div>
              {/* <span className="primary-text">
                <h1 style={{ fontFamily: "Comic Sans MS",fontSize: '50px'}}>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      " Ethusiactic Dev ",
                      10000,
                      " Fullstack Dev",
                      10000,
                      " MERN Dev",
                      10000,
                      " React Dev",
                      1000,
                    ]}
                  />
                </h1>
              </span> */}
              {/* <span className="profile-role-tagline">
              Knak of building application with frontend and backend operations.
            </span> */}
            <br/>
            </div>
            <ul className="social">
              <div className="profile-details">
                <div className="colz">
                  <div className="colz-icon">
                    <a href="https://github.com/Buddhi-Chathuranga">
                      <i className="fa fa-github-square"></i>
                    </a>
                    <a href="https://www.facebook.com/buddhi.chathuranga.102">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                    <a className="smoothscroll" href="#contact">
                      <i className="fa fa-envelope"></i>
                    </a>
                    <a href="http://gitlab.sliit.lk/BuddhiChathuranga_IT19149936">
                      <i class="fa fa-github-alt"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/buddhi-chathuranga-4bb0901ba/">
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </div>
                </div>
<br/>
<br/>
                <div className="profile-options">
                  <a href="#contact" className="smoothscroll">
                  <button  className="btn primary-btn">
                    {""}
                    Hire Me{" "}
                  </button>
                  </a>
                  <a href="./Buddhi.pdf" download={"Buddhi Buddhi.pdf"}>
                    <button className="btn highlighted-btn">Get Resume</button>
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
