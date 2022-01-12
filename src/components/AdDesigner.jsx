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
        disabled2 = "disabled1";
    } else{
        disabled1= "disabled2";
    }
    return (
        <div className="AdDesigner">
            <h1>Ad Designer</h1>
            <div className={"voteFor " + darkTheme}>
                <p>Vote For</p> <span>{flavor}</span>
            </div>
            <h3>What to Support</h3>
            <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
            <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
            <h3>Color Theme</h3>
            
            
            <button onClick={() => setTheme(false)} className={disabled1}>Light</button> 
            <button onClick={() => setTheme(true)} className={disabled2}>Dark</button>
            
            <h3>Font Size</h3>
            <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
            <span>{fontSize}</span>
            <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
        </div>
    )
}
export default AdDesigner;