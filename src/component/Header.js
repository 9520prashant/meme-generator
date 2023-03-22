import React from "react";
import "./Header.css";

export default function Header(){
    return (
        <>
            <nav className="Header">
                <div className="Left">
                    <img src="./troll-face.png" alt="troll face" className="logo"/>
                    <h1>Meme Generator</h1>
                </div>
                <div className="Right">
                    <span>Keep Laughing 🤣</span>
                </div>
            </nav>
        </>
    )
}