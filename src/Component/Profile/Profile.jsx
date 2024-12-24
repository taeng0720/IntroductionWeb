import React from "react";
import useTypingEffect from "./js/useTypingEffect";
import "./css/Profile.css";
import profileImage from "../../img/KakaoTalk_Photo_2024-12-16-20-31-10 018.jpeg";


const Profile = () => {
    const titles = [
        "Backend Developer",
        "Frontend Developer",
        "Game Designer",
        "Game Developer",
        "UI Designer",
    ];

    const { displayText, isTextChanging } = useTypingEffect(titles, 100, 1500);

    return (
        <section className="profile-section">
            <div className="profile-left">
            <img className="profile-img" src={profileImage} alt="Kim Tae Woo" />
                <div className="more-profile">
                    <div>MORE<br />PROFILE</div>
                </div>
                <div className="typing-effect-container">
                        <h3 className={`typing-effect ${isTextChanging ? "delete" : ""}`}>
                            {displayText}
                        </h3>
                    </div>
            </div>

            <div className="profile-right">
                <h2 className="profile-header">
                    <span className="highlight">프로필 _ </span>
                    
                </h2>
                
                <ul className="profile-details">
                    <li><strong>Name</strong> 김태우</li>
                    <li><strong>Date</strong> 2007.07.20</li>
                    <li><strong>Tel</strong> 010-1234-5678</li>
                    <li><strong>Mail</strong> taewoo@example.com</li>
                    <li><strong>Major</strong> 게임 개발</li>
                    <li><strong>Career</strong> 클라이언트 개발, 웹 개발</li>
                </ul>
            </div>
        </section>
    );
};

export default Profile;
