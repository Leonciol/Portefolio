import React, { Component } from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

export default class Entreprise extends Component {
  render() {
    let left = Math.floor(Math.random() * 200 + 700) + "px";
    let top = Math.floor(Math.random() * 200 + 150) + "px";
    let size = "scale(" + Math.random() * 0.7 + ")";
    const variants = {
      initial: {
        opacity: 0,
        transition: { duration: 0.5 },
        x: 100,
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.3 },
        x: -100,
      },
    };
    const transition = {
      ease: [0.03, 0.87, 0.73, 0.9],
      duration: 0.6,
    };
    let plusMinus = Math.random() > 0.4 ? 1 : -1;
    let imgX = Math.random() * 350 * plusMinus;
    let imgY = Math.random() * 120 * plusMinus;
    const imgAnim = {
      initial: {
        opacity: 0,
        x: imgX,
        y: imgY,
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
      },
    };
    return (
      <div>
        <Mouse />
        <div className="project">
          <Navigation />
          <Logo />
          <motion.div
            className="project-main"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={transition}
          >
            <div className="project-content">
              <div>
                <h1>Comité Oise Handball</h1>
                <h2>Association Sportive</h2>
              </div>
            </div>
            <motion.div
              className="img-content"
              initial="initial"
              animate="animate"
              variants={imgAnim}
              transition={transition}
            >
              <div className="img-container hover">
                <span>
                  <h3>Association de handball</h3>
                  <p>Au service des clubs et des joueurs</p>
                </span>
                <img src="./assets/img/comite.png" alt="" />
              </div>
              <div className="button-container">
                <a href="comite.html" target="_blank" className="button">
                  voir la description
                </a>
              </div>
            </motion.div>
          </motion.div>
          <a
            className="random-circle"
            style={{ left, top, transform: size }}
          ></a>

          <ButtonsBottom left={"/bio"} right={"/project-1"} />
        </div>
      </div>
    );
  }
}
