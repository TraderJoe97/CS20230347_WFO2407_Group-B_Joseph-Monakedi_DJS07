import { useState } from "react";

export default function Meme() {
    const [meme,setMeme] = useState({
        url:"http://i.imgflip.com/1bij.jpg",
        topText: "",
        BottomText: "",})
    async function getMemeImage() {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        const randomMeme = data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
        setMeme(PrevMeme => ({...PrevMeme, url: randomMeme.url}));
    }
    return (
        <main className="meme--container"> 
            <div className="form">
                <label htmlFor="top-text">Top Text
                    <input id="top-text" type="text" placeholder="shut up" className="form--input"></input>
                </label>
                <label htmlFor="top-text">Bottom Text
                <input type="text" placeholder="and take my money" className="form--input"></input>
                </label>
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
                <div className="meme">
                    <div className="meme--text">
                        <p className="top">Top Text</p>
                        <p className="bottom">Bottom Text</p>
                    </div>
                    <img className="meme--image" src={meme.url} alt="meme"/>
                </div>
            </div>
        </main>
    );
}