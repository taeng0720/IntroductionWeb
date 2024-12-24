// src/Component/Header/Header.jsx
// Create 2024.12.16 Kim Taewoo
// End ??? Kim Taewoo
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <h2>dev.Taeng</h2>
                <nav className="header__nav">
                    <ul>
                        <li>프로필</li>
                        <li>포트폴리오</li>
                        <li className="sns">
                            SNS
                            <ul className="sns__dropdown">
                                <li><a href="https://github.com" target="_blank" rel="noreferrer">Github</a></li>
                                <li><a href="https://notion.so" target="_blank" rel="noreferrer">Notion</a></li>
                                <li><a href="https://velog.io" target="_blank" rel="noreferrer">Velog</a></li>
                                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__right">
                <button className="menu-btn">☰</button>
            </div>
        </header>
    );
}

export default Header;
