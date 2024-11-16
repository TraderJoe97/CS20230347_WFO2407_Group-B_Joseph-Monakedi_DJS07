import { useEffect, useState } from "react";

export default function Meme() {
    const [meme,setMeme] = useState({
        url:"http://i.imgflip.com/1bij.jpg",
        topText: "",
        bottomText: "",})
    
    const [allMemes,setAllMemes] = useState([])

    function getMemeImage() {

        const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
        setMeme(PrevMeme => ({...PrevMeme, url: randomMeme.url}));
    }

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({...prevMeme, [name]: value}));
    }
    return (
        <main className="meme--container"> 
            <div className="form">
                <label htmlFor="top-text">Top Text
                    <input name="topText" value={meme.topText} id="top-text" type="text" placeholder="shut up" className="form--input"  onChange={handleChange}></input>
                </label>
                <label htmlFor="top-text">Bottom Text
                    <input name="bottomText" value={meme.bottomText} id="bottom-text" type="text" placeholder="and take my money" className="form--input" onChange={handleChange}></input>
                </label>
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                    <div className="meme--text">
                        <p className="top">{meme.topText}</p>
                        <p className="bottom">{meme.bottomText}</p>
                    </div>
                    <img className="meme--image" src={meme.url} alt="meme"/>
                </div>
        </main>
    );
}