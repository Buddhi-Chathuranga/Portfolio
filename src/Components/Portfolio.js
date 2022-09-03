import React, { Component } from "react";
import Git from "./img/github.png";

class Portfolio extends Component {
  render() {
   
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >


                {/* Start Project */}
                <div key={"projects.title"} className="columns portfolio-item">
                  <a
                    href={
                      "https://github.com/Buddhi-Chathuranga/Zoom-ChatBot"
                    }
                  >
                    <div className="item-wrap">
                      <img alt={"Zoom ChatBot"} src={Git} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{"Zoom ChatBot"}</h5>
                          <p>{"Build a Zoom Chatbot using Node.js, Firebase and Heroku for Zoom App Market."}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                    <h5 style={{ textAlign: "center" }}>{"Zoom ChatBot"}</h5>
                  </a>
                </div>
                {/* End of Project  */}

                {/* Start Project */}
                <div key={"projects.title"} className="columns portfolio-item">
                  <a
                    href={
                      "https://github.com/Buddhi-Chathuranga/Zoom-SDK-Window"
                    }
                  >
                    <div className="item-wrap">
                      <img alt={"Zoom Windows SDK"} src={Git} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{"Zoom Windows SDK"}</h5>
                          <p>{"Zoom Windows SDK Desktop Application with Custom UI."}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                    <h5 style={{ textAlign: "center" }}>{"Zoom Windows SDK"}</h5>
                  </a>
                </div>
                {/* End of Project  */}

                {/* Start Project */}
              <div key={"projects.title"} className="columns portfolio-item">
                  <a
                    href={
                      "https://github.com/Buddhi-Chathuranga/RP_Backend"
                    }
                  >
                    <div className="item-wrap">
                      <img alt={"Helth App Backend"} src={Git} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{"Helth App Backend"}</h5>
                          <p>{"Helth App Backend is developed as REST API. It is a ML android application Backend nly"}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                    <h5 style={{ textAlign: "center" }}>{"Helth App Backend"}</h5>
                  </a>
                </div>
                {/* End of Project  */}

              {/* Start Project */}
              <div key={"projects.title"} className="columns portfolio-item">
                  <a
                    href={
                      "https://github.com/Buddhi-Chathuranga/E-Train"
                    }
                  >
                    <div className="item-wrap">
                      <img alt={"E-Train"} src={Git} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{"E-Train"}</h5>
                          <p>{"E-Train is a train ticket booking android application."}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                    <h5 style={{ textAlign: "center" }}>{"E-Train"}</h5>
                  </a>
                </div>
                {/* End of Project  */}

                {/* Start Project */}
              <div key={"projects.title"} className="columns portfolio-item">
                  <a
                    href={
                      "https://github.com/Buddhi-Chathuranga/Student-Management-System"
                    }
                  >
                    <div className="item-wrap">
                      <img alt={"Student Management System"} src={Git} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{"Student Management System"}</h5>
                          <p>{"Student Management System is a simple react website."}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                    <h5 style={{ textAlign: "center" }}>{"Student Management System"}</h5>
                  </a>
                </div>
                {/* End of Project  */}

                

              </div>
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
