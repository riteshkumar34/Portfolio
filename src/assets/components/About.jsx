import React from 'react';

function About() {
  return (
    <>
      <div className="about-container" id="about">
        <div>
          <h1 className="about-heading">About</h1>
          <p className="about-paragraph">
          </p>
          <br />
          <h1 className="about-subheading">Education & Training</h1>
          <span className="about-span">
            <ul>
              <li>10th From Bright Life Public School Rafiganj Aurangabad(2016-21)</li>
              <li>12th From Town Inter School(BSEB) Aurangabad 80% in PCM Integrate(2021-23)</li>
              <li>Btech From GGSIPU in Computer Science and Engineering(2023-27)</li>
            </ul>
          </span>
          <br />
          <br />
          <h1 className="about-subheading">Skills & Expertise</h1>
          <span className="about-span">
            <ul>
    <li><strong>Programming Languages:</strong> C,C++, Java, Python</li>
    <li><strong>Web Development:</strong> HTML, CSS, JavaScript, Node.js, Express.js, ReactJS</li>
    <li><strong>Database:</strong> MongoDB, MySql</li>
    <li><strong>Frameworks & Tools:</strong> Flask, Git, GitHub, VS Code</li>
    <li><strong>Problem Solving:</strong> DSA, LeetCode, HackerRank</li>
    <li><strong>Soft Skills:</strong> Communication, Teamwork,</li>
  </ul>
          </span>
          <br />
          <br />
        <h1 className="about-subheading">Professional Experience</h1>
<span className="about-span">
  <div className="experience-item">
  <h3>Hackathon Participant — Fishtank</h3>
  <p><em>Maharaja Agrasen Institute of Technology (MAIT) | March 2024</em></p>

  <ul>
    <li>Participated in idea pitching and prototyping at MAIT inter-college hackathon</li>
    <li>Proposed a real-time solution on Smart Delivery System with our team members</li>
  </ul>
  <div className="certificate-card">
    <img src="/Fishtank.jpg" alt="" className="certificate-image" />
    <a href="/Fishtank.jpg" download className="download-link">Download</a>
  </div>
</div>


  <div className="experience-item">
    <h3>Open Source Contributor — Open Source Connect India</h3>
    <p><em>2025 - Present</em></p>
    <ul>
      <li>Contributing to beginner-friendly open-source repositories under mentorship</li>
      <li>Working on bug fixing, feature implementation, and Git collaboration</li>
      <li>Learning version control, pull requests, and open-source community practices</li>
    </ul>
    <div className="certificate-card">
    <img src="/Opensource.jpg" alt="D" className="certificate-image" />
    <a href="/Opensource.jpg" download className="download-link">Download</a>
  </div>
</div>
  

  <div className="experience-item">
    <h3>Participant — FOSS Hack</h3>
    <p><em>Febrauary-2025</em></p>
    <ul>
      <li>Participated in Free and Open Source Software (FOSS) Hackathon</li>
      <li>Built and contributed to our open source project of service provider</li>
      <li>Collaborated with our team members  and enhanced real-world coding skills</li>
    </ul>
    
  </div>

  <div className="experience-item">
    <h3>Hackathon Participant — Manthan'kriti (College Tech Fest)</h3>
    <p><em>Delhi Technical Campus | November-2024</em></p>
    <ul>
      <li>Developed innovative tech solutions </li>
      <li>Built a Smart Parking System with our team members</li>
      <li>Presented ideas and demo to judges and tech faculty</li>
    </ul>
  </div>
</span>
<div className="experience-item">
  <h3>Participated in Hack The Mountains 5.0 Hackathon</h3>
  <p><em>Marwari University | Virtually September-2024</em></p>
  <ul>
    <li>It was 24 hours virtual hackathon</li>
    <li>We Proposed a innovative tech solution with our teammates</li>
  </ul>
  <div className="certificate-card">
    <img src="/Marwari.jpg" alt="" className="certificate-image" />
    <a href="/Marwari.jpg" download className="download-link">Download</a>
  </div>
</div>
<div className="experience-item">
  <h3>Participant — Data Science Workshop</h3>
  <p><em>IIT Delhi (RemarkSkill) | February 2024</em></p>
  <ul>
    <li>Attended an intensive 2-day workshop focused on core data science concepts and tools</li>
    <li>Gained hands-on experience with data analysis, visualization, and machine learning basics</li>
    <li>Enhanced practical skills using Python libraries such as Pandas and Matplotlib</li>
  </ul>
  <div className="certificate-card">
    <img src="/IITDelhi.jpg" alt="" className="certificate-image" />
    <a href="/IITDelhi.jpg" download className="download-link">Download</a>
  </div>
</div>
          <br />
          <br />
          <h1 className="about-subheading">Certification</h1>
<div className="certificates">
  <div className="certificate-card">
    <img src="/DSA.jpg" alt="DSA Certificate" className="certificate-image" />
    <a href="/DSA.jpg" download className="download-link">Download</a>
  </div>

  <div className="certificate-card">
    <img src="/Cyber.jpg" alt="Cyber Certificate" className="certificate-image" />
    <a href="/Cyber.jpg" download className="download-link">Download</a>
  </div>

  <div className="certificate-card">
    <img src="/Data.jpg" alt="Data Certificate" className="certificate-image" />
    <a href="/Data.jpg" download className="download-link">Download</a>
  </div>

  <div className="certificate-card">
    <img src="/Mongodb.jpg" alt="MongoDB Certificate" className="certificate-image" />
    <a href="/Mongodb.jpg" download className="download-link">Download</a>
  </div>
</div>


          <br />
          <br />
          <h1 className="about-subheading">Mission Statement</h1>
          <p className="about-paragraph">
            "As a passionate Computer Science student, my mission is to continuously explore, learn, and build impactful digital solutions that solve real-world problems. I aim to grow as a full-stack developer while contributing to communities, participating in innovative projects, and staying at the forefront of technology."
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
