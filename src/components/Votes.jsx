import React, {useState} from 'react';
import './Votes.css'

function Votes(){
    const [chocolate, setChocolate] = useState(0);
    const [vanilla, setVanilla] = useState(0);
    const [strawberry, setStrawberry] = useState(0);
    let totalVotes = chocolate + vanilla + strawberry;

    let noVotes = ""
    if(chocolate === 0 && vanilla === 0 && strawberry === 0){
        noVotes = "No Votes yet."
    }
    

    return (
        <div className="Votes">
            <h1>Vote Here</h1>
            <button onClick={() => setChocolate(chocolate + 1)}>Chocolate</button>
            <button onClick={() => setVanilla(vanilla + 1)}>Vanilla</button>
            <button onClick={() => setStrawberry(strawberry + 1)}>Strawberry</button>
            {
                chocolate === 0  ?
                    <p>Chocolate: {chocolate} </p>:
                    <p>Chocolate: {chocolate} {parseFloat(chocolate / totalVotes * 100).toFixed(1)}%</p>
            }
            <div className="choc" style={{width: (chocolate / totalVotes) * 100}}></div>
            {
                vanilla === 0 ?
                <p>Vanilla: {vanilla} </p>:
                <p>Vanilla: {vanilla} {parseFloat(vanilla / totalVotes * 100).toFixed(1)}%</p>
            }
            <div className="van" style={{width: (vanilla / totalVotes) * 100}}></div>
            {
                strawberry === 0 ?
                <p>Strawberry: {strawberry}</p>:
                <p>Strawberry: {strawberry} {parseFloat(strawberry / totalVotes * 100).toFixed(1)}%</p>
            }
            <div className="straw" style={{width: (strawberry / totalVotes) * 100}}></div>
            <span>{noVotes}</span>
        </div>
    )
}

export default Votes;

