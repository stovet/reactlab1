import React from 'react';

export interface AdProps {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

function Ad({flavor, fontSize, darkTheme}: AdProps){
    let theme = "";
    if(darkTheme){
        theme = "darkTheme";
    }
    return(
        <div className="Ad">
            <div className={"voteFor " + theme}>
                <p>Vote For</p> <span style={{fontSize:fontSize}}>{flavor}</span>
            </div>
        </div>
    )
}
export default Ad;