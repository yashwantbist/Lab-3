import { useState } from "react";

export default function EmojiStore(){
    const [emojiStore, setEmojiStore]= useState([]);

    const addEmoji = (emoji)=>{
        setEmojiStore([...emojiStore, emoji]);
    };

    return (
        <div>
            <h2>Emoji Store</h2>
            <button onClick={() => addEmoji("😊")}>Add happy Face</button>
            <button onClick={() => addEmoji("😟")}>Add sad Face</button>
            <button onClick={() => addEmoji("😟")}>Add cool Face</button>
<br/>
<button onClick={() => setEmojiStore([])}>Empty emoji store</button>
<ul>
    {emojiStore.map((emoji, index) => (
        <li key={index}>{emoji}</li>
    ))}
</ul>


        </div>

    )
}