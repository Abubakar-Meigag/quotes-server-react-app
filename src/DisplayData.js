import React from 'react'

const DisplayData = ( { data } ) => {
    return (
        <div>
            {data.map((quote, index) => {
                return <p key={index}>{quote.quote}</p>
            })}
        </div>
    );
}

export default DisplayData