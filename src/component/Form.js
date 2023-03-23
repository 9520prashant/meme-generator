import React from "react";
import "./Form.css"
import memesData from "../memeData"
import { useState } from 'react';


export default function Form(){
    const [memeImage, setmemeImage] = useState("");
    // let url;
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        //  url = memesArray[randomNumber].url
        // console.log(url)
        if(memeImage == ""){
            
        }
        setmemeImage(memesArray[randomNumber].url);
    }
    
    return (
        <>  
            <section className="section">
                <div className="Form">
                    <input type="text" placeholder="Shut up" />
                    <input type="text" placeholder="and take my money" />
                </div>
                <button className="btn" onClick={getMemeImage}>Get a new meme image 📷</button>
                <div className="meme">
                   <img src={memeImage} alt="df"  className="meme--image"/>
                </div>
            </section>
        </>
    )
}