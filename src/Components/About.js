import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
          <div className="profile-container">
            <div className="profile-parent">
              <div className="profile-picture">
                <div className="profile-picture-background"></div>
              </div>
            </div>
          </div>
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>An Information Technology undergraduate who is seeking to 
              find the opportunity to work in a fun and challenging working 
              environment that will encourage him to improve and learn new and
              necessary skills as well as be motivated by the company to do his 
              best for the sake of helping himself and the company advancement in 
              the Information Technology industry.</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Buddhi Chathuranga A.K</span>
                  <br />
                  <span>
                    "Chamal Niwasa"
                    <br />
                    Mahaheella
                    <br/>
                    Beliatta (82400)
                  </span>
                  <br />
                  <span>076 31 34 470</span>
                  <br />
                  <span>chathuranga4lk12@gmail.com</span>
                </p>
              </div>
              <div className="columns contact-details">
                <h2>Languages</h2>
              <div className="columns download">
                <p>English<br/>Sinhala</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
