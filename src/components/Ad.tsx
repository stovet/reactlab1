import React from 'react';

function Ad({flavor, fontSize, darkTheme}: {flavor: string, fontSize: number, darkTheme: boolean}){
    return(
        <div className="Ad">
            <div className={"voteFor " + darkTheme}>
                <p>Vote For</p> <span>{flavor}</span>
            </div>
        </div>
    )
}
export default Ad;