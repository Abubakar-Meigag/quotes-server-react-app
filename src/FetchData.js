import React, { useState, useEffect } from 'react'
import DisplayData from './DisplayData';

const FetchData = () => {
    const [data, setData] = useState([]);
    const Api = "https://abubakar-meigag-quote-server.glitch.me/quotes";
    
    useEffect(()  => {
        const requestData = async () => {
            try {
                const res = await fetch(Api);
                const quotesData = await res.json()
                // console.log(data);
                setData(quotesData);
            } catch (error) {
                console.log(error);
            }
        }
        requestData();
    }, [])

    return (
        <div>
            <DisplayData  data={data}/>
        </div>
    )
}

export default FetchData