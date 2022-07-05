import React, {useEffect, useState} from "react";

export default function Form() {
   const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      image: "https://i.imgflip.com/26am.jpg"
   });
   const [allMemes, setAllMemes] = useState([]);

   useEffect(() => {
      async function getMemes() {
         const res = await fetch('https://api.imgflip.com/get_memes');
         const data = await res.json();
         
         setAllMemes(data.data.memes);
      }

      getMemes();
   }, [])

   function getMemeImage() {
      const randomNumber = Math.floor(Math.random() * allMemes.length);
      const memeImage = allMemes[randomNumber].url;
      
      setMeme(prevMeme => ({
         ...prevMeme,
         image: memeImage
      }));
   }

   function handleChange(event) {
      const {name, value} = event.target;

      setMeme(prevMeme => ({
         ...prevMeme,
         [name]: value
      }));
   }
   
   return (
      <main>
         <div className='form'>
            <input className='form-input' type='text' placeholder='Top' name='topText' value={meme.topText} onChange={handleChange}/>
            <input className='form-input' type='text' placeholder='Bottom' name='bottomText' value={meme.bottomText} onChange={handleChange}/>
            <button onClick={getMemeImage} className='form-button'>Get meme</button>
         </div>
         <div className="meme">
            <img className='meme-image' src={meme.image}/>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
         </div>
      </main>
   )
}