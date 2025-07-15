import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (project) {
        var projectImage = 'images/portfolio/' + project.image;
        return (
          <div key={project.title} className="card">
            <img src={projectImage} alt={project.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.category}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn">
                View Project <i className="fa fa-link" style={{ marginLeft: '5px' }}></i>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns">
            <h1>Check Out Some of My Work</h1>
            <div className="card-grid">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
