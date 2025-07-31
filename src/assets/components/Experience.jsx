import React from "react";

function Experience() {
  const carditem = [
    { id: 1, logo: "/html.png", name: "HTML" },
    { id: 2, logo: "/css.png", name: "CSS" },
    { id: 3, logo: "/javascript.png", name: "JavaScript" },
    { id: 4, logo: "/mongodb.png", name: "MongoDB" },
    { id: 5, logo: "/expressjs.png", name: "ExpressJS" },
    { id: 6, logo: "/react.png", name: "ReactJS" },
    { id: 7, logo: "/nodejs.png", name: "NodeJS" },
    { id: 8, logo: "/python.png", name: "Python" },
    { id: 9, logo: "/Java.png", name: "Java" },
    { id: 10, logo: "/Mysql.png", name: "MySQL" },
  ];

  return (
    <div className="experience-container" id="experience">
      <h1 className="experience-title">My Portfolio</h1>
      <p className="experience-subtitle">
        I have experience in the following technologies
      </p>
      <div className="experience-grid">
        {carditem.map(({ id, logo, name }) => (
          <div className="experience-card" key={id}>
            <img src={logo} alt={name} className="experience-img" />
            <h3 className="experience-name">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
