import React from 'react';
import './MainSvg.scss';
import character from "../../static/main-svg/character.png";
import keyboard from "../../static/main-svg/keyboard.png";
import mouse from "../../static/main-svg/mouse.png";
import monitor from "../../static/main-svg/monitor.png";
import table from "../../static/main-svg/table.png";
import screen1 from "../../static/main-svg/screen1.png";
import screen2 from "../../static/main-svg/screen2.png";
import plant from "../../static/main-svg/plant.png";
import htmlbox from "../../static/main-svg/htmlbox.png";
import tab1 from "../../static/main-svg/tab1.png";
import tab2 from "../../static/main-svg/tab2.png";
import tab3 from "../../static/main-svg/tab3.png";
import shadows from "../../static/main-svg/shadows.png";
import floor from "../../static/main-svg/floor2.png";

const MainSvg:React.FC = () => {
  return (
    <div className="image">
        <img src={character}id="character" alt=""/>
        <img src={keyboard} id="keyboard" alt=""/>
        <img src={mouse} id="mouse" alt=""/>
        <img src={monitor} id="monitor" alt=""/>
        <img src={table} id="table" alt=""/>
        <img src={screen1} id="screen1" alt=""/>
        <img src={screen2} id="screen2" alt=""/>
        <img src={plant} id="plant" alt=""/>
        <img src={htmlbox} id="htmlbox" alt=""/>
        <img src={tab1} id="tab1" alt=""/>
        <img src={tab2} id="tab2" alt=""/>
        <img src={tab3} id="tab3" alt=""/>
        <img src={shadows} id="shadows" alt=""/>
        <img src={floor} id="floor" alt=""/>
    </div>
  );
}

export default MainSvg;
