import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaYoutube, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import {ReactTyped} from "react-typed";
import pic from "../../../src/Photo.jpg";

function Home() {
  return (
    <>
      <div className="home-container" id="home">
        <div className="home-flex">
          <div className="home-half-width home-spacing-2">
            <span className="home-text-xl">Welcome Everyone</span>
            <div className="home-flex-row home-text-2xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="home-text-red"
                strings={["Developer", "Programmer", "Problem Solver", "Coder", "Enthusiastic Learner"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="home-text-sm home-text-md home-text-justify">
            I am Ritesh Kumar, a passionate and dedicated BTech Computer Science student with a strong focus on full-stack web development, software engineering, and innovative project building. With hands-on experience in HTML, CSS, JavaScript, Node.js, and Python, I create efficient and user-friendly applications. I have worked on multiple real-world projects including smart parking systems, and personal expense trackers, showcasing my problem-solving skills and technical expertise. Eager to learn and grow, I strive to contribute to impactful tech solutions and am always open to new challenges and collaborations.


            </p>
            <br />
            {/* Social media icons */}
            <div className="clarity">
              <div className="home-space-y-2">
              <h1 className="home-font-bold">Social Media</h1>
              <ul className="home-flex-row home-space-x-5">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="home-icon-large" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ritesh-kumar-956352289/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="home-icon-large" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="home-icon-large" />
                  </a>
                </li>
                <li>
                  <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className="home-icon-large" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/riteshkumar34" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="home-icon-large" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="home-space-y-2">
              <h1 className="home-font-bold">Currently Working on</h1>
              <div className="home-flex-row home-space-x-5">
                <DiMongodb className="home-icon-tech" />
                <SiExpress className="home-icon-tech" />
                <FaReact className="home-icon-tech" />
                <FaNodeJs className="home-icon-tech" />
              </div>
            </div>
            </div>
          </div>

          <div
            className="home-half-width"
            style={{ marginLeft: "12rem", marginTop: "5rem", order: 1 }}
          >
            <img src={pic} alt="Profile" className="home-profile-pic" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
