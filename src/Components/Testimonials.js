import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <li key={testimonials.user}>
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">
                <li key={'testimonials.user'}>
                  <blockquote>
                    <p>A person who is happy is not because everything is 
                     right in his life, he is happy because his attitude 
                     towards everything in his life is right.</p>
                    <cite>Mr. Pichai</cite>
                  </blockquote>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
