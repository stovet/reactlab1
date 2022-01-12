import React, {useState} from 'react';
import './AdDesigner.css'

function AdDesigner(){
    const [flavor, setFlavor] = useState("Chocolate");
    const [fontSize, setFontSize] = useState(15);
    const [theme, setTheme] = useState(false);
    let darkTheme = "";
    let disabled1 = "";
    let disabled2 = "";
    if(theme){
        darkTheme = "darkTheme";
        disabled1 = "disabled";
        disabled2 = "";
    } else {
        disabled1 = "";
        disabled2 = "disabled";
    }
    return (
        <div className="AdDesigner">
            <h1>Ad Designer</h1>
            <div className={"voteFor " + darkTheme}>
                <p>Vote For {flavor}</p>
            </div>
            <h2>What to Support</h2>
            <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
            <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
            <h2>Color Theme</h2>
            
            
            <button onClick={() => setTheme(false)} disabled1>Light</button> 
            <button onClick={() => setTheme(true)} disabled2>Dark</button>
            
            <h2>Font Size</h2>
            <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
            <span>{fontSize}</span>
            <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
        </div>
    )
}
export default AdDesigner;