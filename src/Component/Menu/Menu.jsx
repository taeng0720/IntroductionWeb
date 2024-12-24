import React from "react";
import useSmoothScroll from "./js/SmoothScroll";
import "./css/Menu.css";

// 컴포넌트 불러오기
import Title from "../title/title";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";

const Menu = () => {
    useSmoothScroll();

    return (
        <div className="scroll-container">
            <Title />
            <Profile />
            <Skills />
            <Project/>
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Menu;
