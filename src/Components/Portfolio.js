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
                {/*    */}
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
                {/*    */}
                
                
                {/*    */}
                <div key={"Zoom Meeting SDK C# Windows Application"} className="columns portfolio-item">
                  <a
                    href={
                      "https://github.com/Buddhi-Chathuranga/Zoom-SDK-Window"
                    }
                  >
                    <div className="item-wrap">
                      <img alt={"Zoom Meeting SDK C# Windows Application"} src={Git} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{"Zoom Meeting SDK C#"}</h5>
                          <p>{"Zoom custom UI Windows desktop application using Zoom Meeting SDK C# and .Net Framwork"}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                    <h5 style={{ textAlign: "center" }}>{"Zoom Meeting SDK C# Windows Application"}</h5>
                  </a>
                </div>
                {/*    */}

                {/*    */}
                <div key={"Fund Management System Backend"} className="columns portfolio-item">
                  <a
                    href={
                      "https://github.com/Buddhi-Chathuranga/IT19149936_FundService"
                    }
                  >
                    <div className="item-wrap">
                      <img alt={"Fund Management System Backend"} src={Git} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{"Fund Management System Backend"}</h5>
                          <p>{"Fund Management REST API System Backend"}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                    <h5 style={{ textAlign: "center" }}>{"Fund Management System"}</h5>
                  </a>
                </div>
                {/*    */}

                {/*    */}
                <div key={"Fund Management System Backend"} className="columns portfolio-item">
                  <a
                    href={
                      "https://github.com/Buddhi-Chathuranga/MTIT"
                    }
                  >
                    <div className="item-wrap">
                      <img alt={"Institute Management System"} src={Git} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{"Institute Management System"}</h5>
                          <p>{"Institute Management REST System Backend using Node.Js"}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                    <h5 style={{ textAlign: "center" }}>{"Institute Management System"}</h5>
                  </a>
                </div>
                {/*    */}
                {/*    */}
                <div key={"Fund Management System Backend"} className="columns portfolio-item">
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
                          <p>{"Student Management REST System Backend and Frontend using Node.Js and React Web App"}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                    <h5 style={{ textAlign: "center" }}>{"Student Management System"}</h5>
                  </a>
                </div>
                {/*    */}

                
              </div>
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;