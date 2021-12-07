import React from 'react'
const Card = ({data,setMeme}) => {
    return (
            
        <div className="card" onClick={()=>{
        setMeme(data);
    }}>
            <h3> {data.name} </h3>
        <img src={data.url} alt="" />
        </div>
    )
}
export default Card;
