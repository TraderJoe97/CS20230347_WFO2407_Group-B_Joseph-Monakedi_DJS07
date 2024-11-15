export default function Meme() {
    return (
        <main className="meme--container"> 
            <div className="form">
                <label htmlFor="top-text">Top Text
                    <input id="top-text" type="text" placeholder="shut up" className="form--input"></input>
                </label>
                <label htmlFor="top-text">Bottom Text
                <input type="text" placeholder="and take my money" className="form--input"></input>
                </label>
                <button className="form--button">Get a new meme image 🖼</button>
            </div>
        </main>
    );
}