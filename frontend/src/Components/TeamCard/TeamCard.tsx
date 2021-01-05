import React from "react";
import "./TeamCard.scss";

const TeamCard: React.FC = () => {
  return (
    <div className="team-card">
      <div className="game">
        <div className="game-container">
          <div className="rank">3</div>

          <div className="front">
            <img
              src="https://unsplash.it/200/250"
              alt=""
              className="thumbnail"
            />
            <h2 className="name">Game name</h2>
            <div className="stats">
              <div className="numbers">
                <p>478.1k</p>
              </div>
              <div className="streamers">
                <img src="https://unsplash.it/50" alt="" />
                <img src="https://unsplash.it/50" alt="" />
                <img src="https://unsplash.it/50" alt="" />
              </div>
            </div>
          </div>

          <div className="more-info">
            <div className="game-info">
              <p className="game-stat">
                292k <span>watching</span>
              </p>
              <p className="game-stat">
                22k <span>streams</span>
              </p>
            </div>
            <a href="#" className="btn">
              See more streams
            </a>
            <div className="game-streamers">
              <div className="streamers">
                <div className="streamer">
                  <div className="icon">
                    <img src="https://unsplash.it/50" alt="" />
                  </div>
                  <p className="name">name</p>
                  <p className="number">25k</p>
                </div>
                <div className="streamer">
                  <div className="icon">
                    <img src="https://unsplash.it/50" alt="" />
                  </div>
                  <p className="name">name</p>
                  <p className="number">25k</p>
                </div>
                <div className="streamer">
                  <div className="icon">
                    <img src="https://unsplash.it/50" alt="" />
                  </div>
                  <p className="name">name</p>
                  <p className="number">25k</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-bg">
            <div className="back"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
