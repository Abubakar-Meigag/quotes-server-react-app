import React, { useState } from "react";
import RandomQuotes from "./RandomQuotes/RandomQuotes";
import axios from "axios";

const DisplayData = ({ data }) => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState([]);

  const url = "https://abubakar-meigag-quote-server.glitch.me/quotes/search?term=" + text; // I could use back tic here with ${}

  const searchInput = async () => {
    try {
      const res = await axios.get(url);
      setSearch(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handelChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h3>
        {search.map((quote, index) => {
          return (
            <div className="search-block">
              <h3 key={index}> {quote.quote}</h3>
              <p key={index}> author: {quote.author}</p>
            </div>
          );
        })}
      </h3>
      <div className="input-search">
        <input
          type="text"
          onChange={handelChange}
          placeholder="Search for Quotes...."
        />
        <button onClick={searchInput} className="btn">
          Search
        </button>
      </div>
      <div className="btn-div">
        <RandomQuotes data={data} />
      </div>
    </div>
  );
};

export default DisplayData;
