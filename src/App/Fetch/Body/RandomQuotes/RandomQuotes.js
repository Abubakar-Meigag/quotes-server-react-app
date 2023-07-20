import React, { useState } from "react";
import axios from "axios";

const RandomQuotes = () => {
    const [randomQuote, setRandomQuote] = useState("");
    const url = "https://abubakar-meigag-quote-server.glitch.me/quotes/random";

    const pickRandomQuote = async () => {
        try {
        const res = await axios.get(url);
        setRandomQuote(res.data)
        } catch (error) {
            console.log(error);
        }
    }

return (
    <div className="random-div">
        {(
            <div className="result-random">
                <h2>{randomQuote.quote}</h2>
                <p>author: {randomQuote.author}</p>
            </div>
        )}
        <div>
            <button onClick={pickRandomQuote} className="btn">
            Get Random Quote
            </button>
        </div>
    </div>
);
};

export default RandomQuotes;
