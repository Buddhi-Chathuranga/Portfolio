import React, { Component } from "react";
import Progressbar from "./Progress_bar";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
        {/* ------- */}
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key={'education.school'}>
                  <h3>{'SriLanka Institute of Information Technology (SLIIT)'}</h3>
                  <p className="info">
                    {'BSc. Special (Hons) – Information Technology'} <span><br/>&bull;</span>
                    <em className="date">{'Expected graduation date – February 2023'}</em>
                  </p>
                  <p>{'Current GPA - 2.85 (Up to 3rd Year 2nd Semester)'}</p>
                </div>
              </div>
            </div>
          </div>
          {/* ------- */}
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key={'education.school'}>
                  <h3>{'British Way English Academy'}</h3>
                  <p className="info">
                    {'Diploma in English'} <span>&bull;</span>
                    <em className="date">{'Octomber 2018 - February 2019'}</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
          <div key={'Bluechip Technologies Asia'}>
            <h3>{'Bluechip Technologies Asia'}</h3>
            <p className="info">
              {'DotNet Developer (Intern)'}
              <span>&bull;</span> <em className="date">{'January 2022- July 2022'}</em>
            </p>
            {/* <p>{'work.description'}</p> */}
          </div>  
          </div>
        </div>






        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <span className={"className"}></span>

              <ul className="skills">

                <em style={{ fontWeight: 900, fontSize: "20px" }}>HTML / JS / CSS</em>
                <Progressbar bgcolor="orange" progress="90" height={30} />
                
                <em style={{ fontWeight: 900, fontSize: "20px" }}>React</em>
                <Progressbar bgcolor="orange" progress="70" height={30} />

                <em style={{ fontWeight: 900, fontSize: "20px" }}>SQL / Oracle / MongoDB / Firebase</em>
                <Progressbar bgcolor="orange" progress="80" height={30} />

                <em style={{ fontWeight: 900, fontSize: "20px" }}>Java</em>
                <Progressbar bgcolor="orange" progress="70" height={30} />

                <em style={{ fontWeight: 900, fontSize: "20px" }}>Python (Flask)</em>
                <Progressbar bgcolor="orange" progress="60" height={30} />

                <em style={{ fontWeight: 900, fontSize: "20px" }}>C++</em>
                <Progressbar bgcolor="orange" progress="80" height={30} />

                <em style={{ fontWeight: 900, fontSize: "20px" }}>C#</em>
                <Progressbar bgcolor="orange" progress="75" height={30} />

              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
