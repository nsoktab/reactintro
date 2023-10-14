import { useEffect, useState } from "react";

export default function Reactstate(){
    

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