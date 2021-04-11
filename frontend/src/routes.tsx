import React from "react";
import { RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Layout from "./Containers/Layout/Layout";
import Team from "./Containers/Team/Team";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Layout,
    routes: [
      {
        path: "/home",
        exact: true,
        component: Home,
      },
      {
        path: "/team",
        exact: true,
        component: Team,
      },
      {
        path: "/",
        component: () => <Redirect to="/home" />,
      },
    ],
  },
];

export default routes;
