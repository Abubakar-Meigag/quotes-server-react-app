import React, { useState, useEffect } from "react";
import DisplayData from "./Body/DisplayData";
import axios from "axios";
import Header from "./Body/Header";

const FetchData = () => {
  const [data, setData] = useState([]);
  const Api = "https://abubakar-meigag-quote-server.glitch.me/quotes";

  const fetchApi = async () => {
    try {
      const res = await axios.get(Api);
      setData(res.data);
    } catch (Error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <Header />
      <DisplayData data={data} />

      <div className="footer">
        <h1>
          You can’t fall if you don’t climb. But there’s no joy in living your
          whole life on the ground
        </h1>
      </div>
    </div>
  );
};

export default FetchData;
