import React, { useEffect, useRef, useState } from "react";
import './Layout.scss'
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Home from "../Home/Home";
import Team from "../Team/Team";

const Layout: React.FC = () => {
  const [scrollHeight,setScrollHeight] = useState(0);
  const routerContainer = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    let node: HTMLDivElement;
    if(routerContainer.current)
    {
      node = routerContainer.current;
      setScrollHeight((node.scrollTop/(node.scrollHeight - node.clientHeight))*100);
      node.addEventListener('scroll',checkScroll);
    }
    return ()=>{
        node.removeEventListener('scroll',checkScroll);
    }
  },[]);

  function checkScroll(e:any){
    setScrollHeight((e.target.scrollTop/(e.target.scrollHeight - e.target.clientHeight))*100);
  }

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="router-container" ref={routerContainer}>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/team" component={Team}/>
          <Redirect to="/home"/>
        </Switch>
      </div>
      <Socials percent={scrollHeight}></Socials>
    </React.Fragment>
  );
};

export default withRouter(Layout);
