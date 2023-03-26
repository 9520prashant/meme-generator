import React from "react";
import "./Form.css"
import memesData from "../memeData"
import { useState } from 'react';


export default function Form(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    // let url;
 
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <>  
            <section className="section">
                <div className="Form">
                    <input 
                       type="text" 
                       placeholder="Shut up"
                       name="topText"
                       value={meme.topText}
                       onChange={handleChange}
                     />
                    <input 
                      type="text" 
                      placeholder="and take my money" 
                      name="bottomText"
                      value={meme.bottomText}
                      onChange={handleChange}
                    />
                </div>
                <button className="btn" onClick={getMemeImage}>Get a new meme image 📷</button>
                <div className="meme">
                   <img src={meme.randomImage} alt="df"  className="meme--image"/>
                   <h2 className="meme--text top">{meme.topText}</h2>
                   <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </section>
        </>
    )
}