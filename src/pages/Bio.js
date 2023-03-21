import React, { Component } from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";
export default class Bio extends Component {
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
                <h1>Charles Noël</h1>
                <h2>BTS Services Informatiques aux Organisation</h2>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="description">
                  <h2>Description : </h2>
                  <ul>
                    <li>
                      Je m'appelle Charles Noel j'ai 22 ans et <br />
                      je suis actuellement un BTS en Services Informatiques
                      <br />
                      aux Organisations (SIO Slam). Je suis passionné
                      d'informatique
                      <br />
                      et je souhaite poursuivre mes études pour devenir
                      ingénieur en informatique
                      <br />
                      orienté intelligence artificielle.
                    </li>
                    {/* <li>Age: 22ans</li>
                    <li>
                      <h4>Atout:</h4>
                      Passionné d'informatiques, Autonome, Sérieux, Curieux
                    </li> */}

                    <h2>Contact</h2>
                    <li>
                      Email:{" "}
                      <a href="mailto:charles_noel60@outlook.fr">
                        Charles_noel60@outlook.fr
                      </a>
                    </li>
                    <li>
                      téléphone: <a href="tel: 0673246987"> 06.73.24.69.87</a>
                    </li>
                  </ul>
                </div>

                <div className="description">
                  <h2>Centres d'intérêts : </h2>
                  <ul>
                    <li>Handball en club</li>
                    <li>Jeux vidéos</li>
                    <li>Animaux</li>
                    <li>Culture Manga</li>
                    <li>Faits de sociétés</li>
                  </ul>
                </div>
              </div>
              <div className="flex">
                <div className="formation">
                  <h2>Formation</h2>
                  <h2>Expérience Professionnelle</h2>
                  <ul>
                    <li>
                      <h4>2020-2022:</h4>
                      BTS SIO (Service Informatiques Aux Organisation)
                    </li>
                    <li>
                      <h4>2019-2020:</h4> Équipier polyvalent MC Donalds
                      Clermont
                    </li>

                    <li>
                      <h4>2019:</h4> Diplôme d'aide soignant
                    </li>
                    <li>
                      <h4>2018:</h4> Bac Scientifiques Option: mathématiques
                    </li>
                  </ul>
                </div>
                <div className="skills">
                  <h2>Compétences : </h2>
                  <h3>Langages informatiques</h3>
                  <ul>
                    <li>Javascript</li>
                    <li>Php</li>
                    <li>Laravel</li>
                    <li>Html</li>
                    <li>Css</li>
                    <li>React Native</li>
                  </ul>
                  <h3>Autres</h3>
                  <ul>
                    <li>Anglais: Niveau B1</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          <a
            className="random-circle"
            style={{ left, top, transform: size }}
          ></a>

          <ButtonsBottom left={"/"} right={"/project-1"} />
        </div>
      </div>
    );
  }
}
