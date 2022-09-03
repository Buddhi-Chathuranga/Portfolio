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
                      "https://stackoverflow.com/questions/52609299/img-src-not-loading-in-react"
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
                      "https://stackoverflow.com/questions/52609299/img-src-not-loading-in-react"
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
              </div>
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
