import React from "react";
import Lottie from "lottie-react";
import HackerAnim from "../../../public/animation/hacker.json"
import { useRef } from "react";
import './hero.css';
const Hero = () => {
      // @ts-ignore
      const lottieRef = useRef();

    return (
        <section className="hero flex">
            <div className="left-sec ">
                <div className="parent-avatar flex">
                    <img className="avatar" src="./hazem1.png" alt="" />
                    <div className="icon-verified" ></div>
                </div>
                <h1
                className="title">
                    Full Stack Developer && Cyber Security Engineer.
                </h1>
                <p className="subtitle">I'm Hazem Gamal, a full stack developer and Cyber Security Engineer </p>
                <div className="all-icons flex">
                 <a href=""><div className="icon icon-twitter"></div></a>
                  <a href="">  <div className="icon icon-instagram"></div></a>
                   <a href=""> <div className="icon icon-github"></div></a>
                    <a href=""><div className="icon icon-linkedin-square"></div></a>
                </div>




            </div>
            <div className="right-sec animation ">
                <Lottie
 lottieRef={lottieRef}                
                className="contact-anim"
                  style={{height:400 } }
                  onLoadedImages={()=>{
                    lottieRef.current.setSpaed(0.55);
                  }}
                 animationData={HackerAnim} />
            </div>
        </section>

    );
}
export default Hero;