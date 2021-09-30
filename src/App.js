import React from "react";
import { Router } from "@reach/router";

import Context from "./Context";

import { GlobalStyles } from "./styles/GlobalStyles";

import { Home } from "./pages/Home";

import { Logo } from "./components/Logo";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/Users";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";


export default function () {
  return (
    <div>
      <Logo />
      <GlobalStyles />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </div>
  );
}
