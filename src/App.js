import { useEffect,useState } from 'react';
import './App.css';
import Card from "./components/Card"
import Meme from "./components/Meme"

async function f(url){
  const response = await fetch(url);
   const data = await response.json();
   console.log(data.data)
   return data.data.memes;
}

function App() {
  const [datas, setDatas] = useState([]);
  const [meme, setMeme] = useState("")  
  useEffect(() => {
     f('https://api.imgflip.com/get_memes')
    .then(setDatas)
  }, [])
  // let url="https://api.imgflip.com/caption_image/87743020"
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" / >
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
    <h1>MEME GENERATOR</h1>
    <div className="container2"  >
    {meme===""?datas.map(data=><Card data={data} setMeme={setMeme} />) : <Meme meme={meme} setMeme={setMeme} />}
    </div>
    { }
    
    </>
  );  
}

export default App;