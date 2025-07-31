import React from 'react';

function Projects() {
  const carditem = [
    {
      id: 1,
      logo: "/html.png",
      name: "HTML",
      desc: "A basic HTML-based webpage of Netflix.",
      link: "https://github.com/riteshkumar34/Netflixclone"
    },
    {
      id: 2,
      logo: "/css.png",
      name: "CSS",
      desc: "A stylish landing page of Amazon.",
      link: "https://github.com/riteshkumar34/AmazonClone"
    },
    {
      id: 3,
      logo: "/javascript.png",
      name: "JavaScript",
      desc: "A smart parking management system",
      link: "https://github.com/riteshkumar34/Parkingsystem1"
    },
    {
      id: 4,
      logo: "/mongodb.png",
      name: "MongoDB",
      desc: "A full working website for a restaurant",
      link: "https://github.com/riteshkumar34/RESTAURANT"
    },

    {
      id: 6,
      logo: "/react.png",
      name: "ReactJS",
      desc: "A modern React portfolio website.",
      link: "https://github.com/riteshkumar34/Portfolio.git"
    },
    {
      id: 7,
      logo: "/nodejs.png",
      name: "NodeJS",
      desc: "Server-side logic with NodeJS of a basic Chat-App",
      link: "https://github.com/riteshkumar34/ChatApp"
    },
    {
      id: 8,
      logo: "/python.png",
      name: "Python",
      desc: "Expense tracker.",
      link: "https://github.com/riteshkumar34/ExpenseTracker"
    },
  ];

  return (
    <div id="Projects" className="portfolio-container">
      <h1 className="portfolio-title">Projects</h1>
      <div className="portfolio-grid">
        {carditem.map(({ id, logo, name, desc, link }) => (
          <div className="portfolio-card" key={id}>
            <img src={logo} alt={name} className="portfolio-img" />
            <div className="portfolio-content">
              <div className="portfolio-name">{name}</div>
              <p className="portfolio-desc">{desc}</p>
            </div>
            <div className="portfolio-btn-wrapper">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="portfolio-btn">Source Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
