import React, { Component } from "react";
// import emailjs from 'emailjs-com';
import axios from "axios";
import node from './img/nodejs.png';
import mongo from './img/mongo.png';
import react from './img/react.png';
import python from './img/python.png';
import net from './img/net.png';
import heroku from './img/heroku.png';

function sendEmail(e) {
  alert("Hello!");
  //    e.preventDefault();

  //    emailjs.sendForm(
  //       'service_hsyivmj',
  //       'template_4az86xc',
  //       e.target,
  //       'lyi7IodtBNSwDqeVz').then(res=>{
  //          console.log(res);
  //       }).catch(err=>console.log(err));
}

class Contact extends Component {
  render() {
    return (
      <section id="contact">

         <h2 style={{textAlign:'center', color:'HighlightText',textDecoration: 'underline'}}>Tech Stack</h2>
         <div className="row">
         </div>

        <div className="row">
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Node JS</h4>
              <img src={node} alt="logo" />
              <p className="nodejs">
              Node.js is a platform built on Chrome's JavaScript 
              runtime for easily building fast and scalable network 
              applications. Node.js uses an event-driven, non-blocking 
              I/O model that makes it lightweight and efficient, perfect 
              for data-intensive real-time applications that run across 
              distributed devices.
              </p>
            </div>
          </aside>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>MongoDB</h4>
              <img src={mongo} alt="logo" />
              <p className="address">
              MongoDB Atlas is a fully-managed cloud database that handles
               all the complexity of deploying, managing, and healing your 
               deployments on the cloud service provider of your choice 
               (AWS , Azure, and GCP). MongoDB Atlas is the best way to 
               deploy, run, and scale MongoDB in the cloud. With Atlas, you’ll 
               have a MongoDB database running with just a few clicks, and in 
               just a few minutes.
              </p>
            </div>
          </aside>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>React</h4>
              <img src={react} alt="logo" />
              <p className="address">
              ReactJS is a declarative, efficient, and flexible 
              JavaScript library for building reusable UI components. It 
              is an open-source, component-based front end library responsible 
              only for the view layer of the application. It was created by Jordan 
              Walke, who was a software engineer at Facebook. It was initially
               developed and maintained by Facebook and was later used in its 
               products like WhatsApp & Instagram.
              </p>
            </div>
          </aside>

        </div>


        <div className="row">
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Python</h4>
              <img src={python} alt="logo" />
              <p className="address">
              Python is a dynamic, interpreted (bytecode-compiled) language. There are 
              no type declarations of variables, parameters, functions, or methods in 
              source code. This makes the code short and flexible, and you lose the 
              compile-time type checking of the source code. Python tracks the types 
              of all values at runtime and flags code that does not make sense as it runs.
              </p>
            </div>
          </aside>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Microsoft DotNet</h4>
              <img src={net} alt="logo" />
              <p className="address">
              .NET is a free, cross-platform, open source developer platform for building many 
              kinds of applications. .NET is built on a high-performance runtime that is
               used in production by many high-scale apps.
              </p>
            </div>
          </aside>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Heroku</h4>
              <img src={heroku} alt="logo" />
              <p className="address">
              Heroku is a container-based cloud Platform as a Service (PaaS). 
              Developers use Heroku to deploy, manage, and scale modern apps. 
              Our platform is elegant, flexible, and easy to use, offering developers 
              the simplest path to getting their apps to market.
              </p>
            </div>
          </aside>

        </div>


      </section>
    );
  }
}

export default Contact;
