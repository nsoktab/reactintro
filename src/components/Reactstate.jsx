import { useState } from "react";

export default function Reactstate(){
    
    const [input, setInput] = useState("");

    return(
        <section>
            <form>
                <input type="text" placeholder="Your Name: " value={input} 
                onChange={e => (setInput(e.target.value),
                console.log(e.target.value))}/>
            </form>
            <h2>Hello, {input} 🌚</h2>
        </section>
    )
}