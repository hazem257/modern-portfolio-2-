import React, { useState } from "react";
import './main.css';

import { myprojects } from "./myprojects";
const Projects = () => {
    const [currenActive, setCurrentActive] = useState("all");

    const [arr, setarr] = useState(myprojects);


    const handleClic = (buttonCategory) => {
        setCurrentActive(buttonCategory)
        const newarr = myprojects.filter((item) => {
            const arrfilt = item.category.filter((myitem) => {
                return myitem === buttonCategory
            })
            return arrfilt[0] == buttonCategory

        })
        setarr(newarr);
    }

    return (
        <main className="flex">
            <section className="left-sec flex  ">
                <button onClick={() => {
                    setCurrentActive("all")
                    setarr(myprojects)
                }} className={currenActive === "all" ? "Active" : null}>All projects</button>

                <button onClick={() => {
                    handleClic("css")
                }} className={currenActive === "css" ? "Active" : null}>html & CSS
                </button>

                <button onClick={() => {
                    handleClic("react")
                }} className={currenActive === "react" ? "Active" : null}>React JS
                </button>

                <button onClick={() => {
                    handleClic("full stack")
                }} className={currenActive === "full stack" ? "Active" : null}>full Stack
                </button>

            </section>
            <section className="  flex right-sec ">
                {arr.map((item) => {
                    return (
                        <article className="card " key={item.imgpath}>
                            <img width={266} src={item.imgpath} alt="" />

                            <div style={{ width: "266px" }} className="box ">
                                <h1 className="title">{item.projectTitle}</h1>
                                <p className="subtitle">{item.about}</p>

                                <div className="flex icons">
                                    <div style={{ gap: "11px" }} className="flex">
                                        <a href={item.live}> <div className="icon-link"></div></a>
                                        <a href={item.Github}><div className="icon-github"></div></a>
                                    </div>
                                    <a className="link flex" href="">more
                                        <span style={{ alignSelf: "end" }} className="icon-arrow-right"></span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    )
                })}


            </section>

        </main>

    );
}
export default Projects;

