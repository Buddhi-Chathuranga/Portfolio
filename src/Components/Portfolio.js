import React, { Component } from "react";
import Git from "./img/github.png";

class Portfolio extends Component {
  render() {
    // if(this.props.data){
    //   var projects = this.props.data.projects.map(function(projects){
    //     var projectImage = 'images/portfolio/'+projects.image;
    //     return <div key={projects.title} className="columns portfolio-item">
    //        <div className="item-wrap">
    //         <a href={projects.url} title={projects.title}>
    //            <img alt={projects.title} src={projectImage} />
    //            <div className="overlay">
    //               <div className="portfolio-item-meta">
    //              <h5>{projects.title}</h5>
    //                  <p>{projects.category}</p>
    //               </div>
    //             </div>
    //           <div className="link-icon"><i className="fa fa-link"></i></div>
    //         </a>
    //       </div>
    //     </div>
    //   })
    // }

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

                <div key={"projects.title"} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a
                      href={`https://stackoverflow.com/questions/52609299/img-src-not-loading-in-react`}
                      title={"projects.title"}
                    >
                      <img alt={"projects.title"} src={Git} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{"projects.title"}</h5>
                          <p>{"projects.category"}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </a>
                  </div>
                </div>

                <div key={"projects.title"} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a
                      href={`https://stackoverflow.com/questions/52609299/img-src-not-loading-in-react`}
                      title={"projects.title"}
                    >
                      <img alt={"projects.title"} src={Git} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{"projects.title"}</h5>
                          <p>{"projects.category"}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
