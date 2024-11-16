import { useEffect, useState } from "react";

/**
 * @function Meme
 * @description A function component that renders a form where you can input text to be displayed on a meme image.
 *              It renders a meme image and text on top and bottom of the image. When you click the "Get a new meme image " button, it fetches a random meme image from the imgflip API and renders it.
 * @returns {JSX.Element} A JSX Element representing the meme component.
 */
export default function Meme() {
  const [meme, setMeme] = useState({
    url: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });

  const [allMemes, setAllMemes] = useState([]);

  /**
   * @function getMemeImage
   * @description Fetches a random meme image from the imgflip API and renders it.
   *              The image is selected from the array of meme objects in state.
   *              The state is updated with a new meme image url.
   */
  function getMemeImage() {
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
    setMeme((PrevMeme) => ({ ...PrevMeme, url: randomMeme.url }));
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  /**
   * @function handleChange
   * @description Handles the input change event from the meme form.
   *              Updates the meme state with the input values.
   * @param {Event} event - The input change event.
   */
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }
  return (
    <main className="meme--container">
      <div className="form">
        <label htmlFor="top-text">
          Top Text
          <input
            name="topText"
            value={meme.topText}
            id="top-text"
            type="text"
            placeholder="shut up"
            className="form--input"
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="top-text">
          Bottom Text
          <input
            name="bottomText"
            value={meme.bottomText}
            id="bottom-text"
            type="text"
            placeholder="and take my money"
            className="form--input"
            onChange={handleChange}
          ></input>
        </label>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <div className="meme--text">
          <p className="top">{meme.topText}</p>
          <p className="bottom">{meme.bottomText}</p>
        </div>
        <img className="meme--image" src={meme.url} alt="meme" />
      </div>
    </main>
  );
}
