import React from "react";
import { useState } from 'react';
import "../App.css";

const Meme = ({ meme, setMeme }) => {
    const [form, setForm] = useState({
        template_id:meme.id,
        username:"samyakjain34",
        password:"samyak2904",
        boxes:[]
    })
     function generate(){
         console.log("clicked")
        let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&&username=${form.username}&&password=${form.password}&&boxes=`;
        form.boxes.map((box,index)=>{
            url+=`&boxes[${index}][text]=${box.text}`;
        })
        console.log("url: ",url);
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data);
           setMeme({...meme,url:data.data.url})
        })
    }
  return (
    <div className="meme">
    
      <h1>{meme.name}</h1>
      <img src={meme.url} alt="" />
      <div>
        {[...Array(meme.box_count)].map((ele, id) => (
          <input key={id} type="text" placeholder={`Meme Caption:${id + 1}`} onChange={
              (e)=>{
                  const newBoxes= form.boxes;
                  newBoxes[id]={text: e.target.value}
                  setForm({...form,boxes:newBoxes})
                }
          }/>
        ))}
        <button onClick={generate}>Create Meme</button>
      <button
        onClick={() => {
          setMeme("");
        }}
      >
        GO BACK
      </button>

      </div>
    </div>
  );
};

export default Meme;
