import React from "react";
import "./Team.scss";
import profilepic from '../../static/profilepic.jpeg';

const Team: React.FC = () => {
  return (
    <div className="team">
    <div className="home-container">
      <div className="intro">
        <div className="text-content">
          <p>
            <h1>THE TEAM</h1>
            <h2>The session of 2021</h2>
          </p>

        </div>
        <div className="main-down-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.55 44.393">
            <g
              id="Group_2"
              data-name="Group 2"
              transform="translate(-966 -967.48)"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M982,967.98V1011.1"
                transform="translate(-1.5)"
                fill="none"
                stroke="#141414"
                strokeLinecap="round"
                strokeWidth="1"
              ></path>
              <path
                id="Path_2"
                data-name="Path 2"
                d="M966.813,997.8l13.973,13.577L994.363,997.8"
                transform="translate(-0.313)"
                fill="none"
                stroke="#141414"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      </div>
      <div className="wide-cont-wrap">
    <section id="team">
      <div id="center-text"><h1>Tech Leads</h1></div>
      <div className="team-cards">
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/ankit.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Ankit Kurmi</h2>
                <p className="bio">DSC Lead
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={profilepic} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Dipan Roy</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={profilepic} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Ritankar Paul</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={profilepic} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Ayushman B. Thakur</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/suchana.jpg')}alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Suchana Chakraborti</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
      </div>
      <h1>Project Leads</h1>
      <div className="team-cards">
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/aayush.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Aayush Agarwal</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/ayush_singh.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Ayush Singh</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/sayantan_sadhu.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Sayantan Sadhu</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/anindya.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Anindya Kanti Mitra</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
      </div>
      <h1>Outreach</h1>
      <div className="team-cards">
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/Soumik.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Soumik Adhikary</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/ayush_singh.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Ayush Singh</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={profilepic} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Mayukh Sen</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/rik.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Rik Patra</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
      </div>
      <h1>App Development Team</h1>
      <div className="team-cards">
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/aryan.jpeg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Aryan Barnwal</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/alquama.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Alquama Salim</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/adrishyantee.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Adrishyantee Maiti</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/jeet.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Jeet Nath</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={profilepic} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Uttam Modi</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/manish.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Manish Pandey</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
      </div>
      <h1>Web Development Team</h1>
      <div className="team-cards">
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/aayush.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Aayush Agarwal</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/debadree.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Debadree Chatterjee</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/deepak.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Deepak Pandey</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={profilepic} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Niloy Majumdar</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/soumyajit.jpeg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Soumyajit Datta</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
      </div>
      <h1>Machine Learning Team</h1>
      <div className="team-cards">
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/sayantan_sadhu.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Sayantan Sadhu</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/mayukh.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Mayukh Sen</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={profilepic} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Agni Sain</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/Snehashis.jpeg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Snehasis Dhibar</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/soumyajit.jpeg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Soumyajit Datta</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
      </div>
      <h1>IoT and Electronics Team</h1>
      <div className="team-cards">
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/anindya.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Anindya Kanti Mitra</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/anubhav.jpeg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Anubhav Dutta</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/Partha.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Partha Singha Roy</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/arnab_das.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Arnab Das</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={profilepic} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Subhankar Bose</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
      </div>
      <h1>Graphics and Designing Team</h1>
      <div className="team-cards">
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/Debapriyo.png')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Debapriyo Kundu</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/rishav.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Rishav Dutta</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/Soumik.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Soumik Adhikary</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/ritoja.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Ritoja Sen</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/aarati.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Aarati Shah</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/abhishek.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Abhisek Baral</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/saptarshi.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Saptarshi Bhattacharya</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
      </div>
      <h1>Content Writing Team</h1>
      <div className="team-cards">
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/rik.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Rik Patra</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/saheli.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Saheli Saha</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/neha.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Neha Bhansali</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
      </div>
    </section>
  </div>
    </div>
  );
};

export default Team;