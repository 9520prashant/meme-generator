import React from "react";
import "./Form.css"

export default function Form(){
    return (
        <>  
            <section className="section">
                <div className="Form">
                    <input type="text" placeholder="Shut up" />
                    <input type="text" placeholder="and take my money" />
                </div>
                <button className="btn">Get a new meme image 📷</button>
            </section>
        </>
    )
}