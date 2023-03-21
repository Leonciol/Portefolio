import React, { useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Bio from "./pages/Bio";
import Entreprise from "./pages/Entreprise";

import { Project1, Project2, Project3, Project4 } from "./pages/Projects";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/";
      console.log(e.wheelDeltaY);
      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 300);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 300);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("bio");
            }, 300);
          }
          break;
        case url + "bio":
          wheelRouter("entreprise", "");
          break;
        case url + "entreprise":
          wheelRouter("project-1", "bio");
          break;
        case url + "project-1":
          wheelRouter("project-2", "entreprise");
          break;

        case url + "project-2":
          wheelRouter("project-3", "project-1");
          break;

        case url + "project-3":
          wheelRouter("project-4", "project-2");
          break;

        // case url + "project-4":
        //   wheelRouter("contact", "project-3");
        //   break;

        // case url + "contact":
        //   if (e.wheelDeltaY > 0) {
        //     setTimeout(() => {
        //       history.push("project-4");
        //     }, 300);
        //   }
        //   break;
        case url + "project-4":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("project-3");
            }, 300);
          }
          break;
        default:
          console.log("rien");
      }
    };

    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/bio" component={Bio} />
        <Route exact path="/entreprise" component={Entreprise} />
        <Route exact path="/project-1" component={Project1} />
        <Route exact path="/project-2" component={Project2} />
        <Route exact path="/project-3" component={Project3} />
        <Route exact path="/project-4" component={Project4} />
        <Route exact path="/contact" component={Contact} />

        {/* <Redirect to="/" /> */}
      </Switch>
    </AnimatePresence>
  );
};

export default App;
