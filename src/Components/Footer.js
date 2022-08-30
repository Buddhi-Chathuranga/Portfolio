import React, { Component } from "react";

class Footer extends Component {
  render() {

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            {/* <ul className="social-links">
              <div className="colz-icon">
                <a href="https://github.com/Buddhi-Chathuranga">
                  <i className="fa fa-git-alt"></i>
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
            </ul> */}

            <ul className="copyright">
              <li>&copy; Copyright 2022 Buddhi Chathranga</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
