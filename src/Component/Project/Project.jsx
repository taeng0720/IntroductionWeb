import React, { useState } from "react";
import "./css/Project.css";

function Section({ align, imageSrc, title, subtitle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`section ${align}`}>
      <div
        className="section-content"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="section-image">
          <img src={imageSrc} alt={title} />
          <div className={`overlay ${isHovered ? "active" : ""}`}>
            <div className="split top"></div>
            <div className="split bottom"></div>
            <div className="hover-text">View Project →</div>
          </div>
        </div>
        <div className="section-text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <div>
      <Section
        align="right"
        imageSrc={require("../../img/M.E.png")}
        title="M.E"
        subtitle="곡괭이를 들고 가장 높은 곳으로 올라가자"
      />
      <Section
        align="left"
        imageSrc={require("../../img/KakaoTalk_Photo_2024-12-16-20-31-10 018.jpeg")}
        title="Cleaner"
        subtitle="곡괭이를 들고 가장 높은 곳으로 올라가자"
      />
      <Section
        align="right"
        imageSrc={require("../../img/M.E.png")}
        title="SW-AI"
        subtitle="곡괭이를 들고 가장 높은 곳으로 올라가자"
      />
      <Section
        align="left"
        imageSrc={require("../../img/KakaoTalk_Photo_2024-12-16-20-31-10 018.jpeg")}
        title="OnlineJudge"
        subtitle="곡괭이를 들고 가장 높은 곳으로 올라가자"
      />
      
    </div>
  );
}
