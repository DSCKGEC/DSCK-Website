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
          <h1 className="heading">THE TEAM</h1>
            <h2>The session of 2021</h2>
          </p>

        </div>
        <div className="svg-content">
            <img src={require('../../static/teamsvg.svg')} className="img-team"/>
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
                        <li><a target="_blank" href="https://www.facebook.com/theankitkurmi/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/theankitkurmi"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Ankit152"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/ankitk152/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/theankitkurmi/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/dipan.jpeg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Dipan Roy</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/ritankar.jpeg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Ritankar Paul</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/Ayushman.jpeg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Ayushman B. Thakur</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/suchana.chakrabarti"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Suchana34"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/suchana-chakrabarti-770b5616b"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/lead_bit/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://facebook.com/singhayushh"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/singhayushhh"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/singhayushh"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://linkedin.com/in/singhayushh"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://instagram.com/_singhayushh"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/sayantan1410"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/sayantan--/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/the_gifted_curse/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/anindyakanti.mitra.10"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/akm_machine"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/AKM15machine"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/akm15machine/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/akm_mach1ne/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://facebook.com/singhayushh"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/singhayushhh"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/singhayushh"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://linkedin.com/in/singhayushh"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://instagram.com/_singhayushh"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/rik.patra.338"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/RikPatra02"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/RikPatra"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/rik-patra-a340a9200/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/spelling_misstake/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/AryanBarnwal19"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Aryan6290"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/ar-yawn/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/alquama00s"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://linkedin.com/in/alquamasalim/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/adrishyanteee.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Adrishyantee Maiti</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a target="_blank" href="https://www.facebook.com/adrishyantee2002/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/adrishyantee"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/adrishyantee-m-755876139/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/_adrishyantee_"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/goblin.neural/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/JettyNeural"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Jetty53"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/jeet-nath-296b1b1bb/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/jetty_neural/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/uttam.jpeg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Uttam Modi</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100004764855806"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/KylixMedusa"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/aayush-agarwal-214b5a17b/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100005101688013"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/deepak821"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="http://linkedin.com/in/deepak-pandey-b96583193/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/deepsjacker/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/niloy.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Niloy Majumdar</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Niloy-Majumder"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/niloy-majumder-6320b4192/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100014357407641"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Codehackerone/"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/soumyajit-datta-974460202/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/the_codehacker_one/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/sayantan1410"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/sayantan--/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/the_gifted_curse/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/agni.jpeg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Agni Sain</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/agnisain123"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/mwlite/in/agni-sain-95978416b"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Snehashis-Dhibar"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/snehashis-dhibar-572002133"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100014357407641"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Codehackerone/"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/soumyajit-datta-974460202/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/the_codehacker_one/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/anindyakanti.mitra.10"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/akm_machine"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/AKM15machine"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/akm15machine/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/akm_mach1ne/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/anubhav.dutta.792"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/AnubhavDutta6"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/anubhav666"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/anubhav-dutta-408368191/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/_haineki_/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100010844744284"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/arnabdas01"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/arnab-das-842679193"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/i_m__a_r_n_a_b/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                </p>
            </div>
        </div>
        <div className="tm-container">
            <img className="js-picture cp-circle" src={require('../../static/team/Subhankar.jpg')} alt="profile picture"/>
            <div className="tm-info">
                <h2 className="name">Subhankar Bose</h2>
                <p className="bio"><br/>
                    <ul>
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/RandomDelta6"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="http://facebook.com/raatja.pakhi"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Rito98"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/ritoja-sen-bbb367191/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="http://instagram.com/ritoja_s/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/aarati.shah.7528"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Antlia360"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/aarati-shah-a49430191/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/aarati._shah/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/abhishek.baral.5496/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/baralabhishek1"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/abhishek-baral-246368191/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/baralabhishek2/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/saptarshi.bhattacharya.9066/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/sbk_2k1"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/sbk2k1"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/saptarshi-bhattacharya-b9346a203/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/sbk_2k1/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/rik.patra.338"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/RikPatra02"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/RikPatra"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/rik-patra-a340a9200/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/spelling_misstake/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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
                        <li><a target="_blank" href="https://www.facebook.com/neha.bhansali.7902"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://github.com/neha200206"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/neha-bhansali-4681a8206"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/neh_bhansali/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
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