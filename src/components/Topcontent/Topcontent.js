import './Topcontent.css'
import { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import { useTransition, animated, config } from 'react-spring'
import pdf from "../../BANUPRIYA_MOHANRAJ_CV.PDF"


export default function Topcontent({ isVisible }) {

  const Bounce = styled.div`animation : 20s ${keyframes`${bounce}`} infinite`;
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!toggle),
  })


  return <>

    <div className="Topcontent">
      <div class="Topcontent__Left">
        <Particles params={{
          "particles": {
            "number": {
              "value": 76,
              "density": {
                "enable": true,
                "value_area": 473.51100518494565
              }
            },
            "color": {
              "value": "#1f8780"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#25C998"
              },
              "polygon": {
                "nb_sides": 3
              },
              "image": {
                "src": "",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.04057618178129441,
                "sync": false
              }
            },
            "size": {
              "value": 10,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 5,
                "sync": true
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 416.6266064160501,
              "color": "#ffffff",
              "opacity": 0.03204820049354232,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1.6024100246771158,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 640.9640098708463,
                "rotateY": 1201.807518507837
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }}
          height="80vh" />

      </div>
      <div className="topcontent_container">
        <div className=" topcontent_containerRow">
          <div className="col-5 img_col">
            <Fade left>  <img src="../Images/banu_profile.jpg" alt="" width="300px" height="300px" style={{ borderRadius: "50%" }}></img>
            </Fade>
          </div>

          <div className="col-7 info_col">
            <Fade right ><h1><Bounce>Hello, I'm <span className="font__Color">B</span>ANU <span className="font__Color">P</span>RIYA</Bounce></h1>
            </Fade>
            <br />
            <Fade right  >
            {
              transitions(({ opacity }, item) =>
                item ? (<animated.div
                  style={{
                    position: 'absolute',
                    opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                  }}>
                  <h3>I'm a <span className="font__Color">Full-stack developer</span></h3>
                </animated.div>) : (
                  <animated.div
                    style={{
                      position: 'absolute',
                      opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
                    }}>
                    <h3>I'm a <span className="font__Color">MERN stack developer</span></h3>
                  </animated.div>
                )
              )
            }

           
              <div className="row topcontent__icon" >

                <div className="contacticon__link">
                  <a href="https://www.linkedin.com/in/banu-priya-mohanraj-74331b19b" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/office/40/000000/linkedin-circled--v2.png" alt="linkedin"/>
                  </a>
                  </div>
                  <div className="contacticon__link">
                  <a href="https://github.com/banupriyamohanraj" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/fluency/40/000000/github.png" alt="github" />
                  </a>
                  </div>
                  <div className="contacticon__link">
                  <button type="button" className="btn btn-outline-info"> <a href={pdf} target="_blank" rel="noreferrer" className="link">Download CV <i class="fas fa-download fa 2x"></i></a></button>
                </div>
              </div>
            </Fade>


          </div>
        </div>


      </div>

    </div>

  </>

}


