import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

const ScrollToTop: React.FC<RouteComponentProps> = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return <>{props.children}</>;
};

export default withRouter(ScrollToTop);
