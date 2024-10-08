import { useState } from "react"

export default function Toggle(){
    const [isHappy, setIsHappy] = useState(true);
    const [btnText, setBtnText] = useState("make me sad")

    return(
        <div>
            <h1>{isHappy ? "😊" : "😟"}</h1>
            
            <button onClick={() => setIsHappy(isHappy ? setBtnText("Make me sad") :setBtnText("make me happy"))}>{btnText}</button>
        </div>
    )
}