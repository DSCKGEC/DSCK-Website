import React, { useEffect, useRef, useState } from "react";
import './Layout.scss'
import { withRouter } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import { renderRoutes } from "react-router-config";

const Layout: React.FC<any> = (props) => {
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

  const { route } = props;

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="router-container" ref={routerContainer}>
        {renderRoutes(route.routes)}
      </div>
      <Socials percent={scrollHeight}></Socials>
    </React.Fragment>
  );
};

export default withRouter(Layout);
