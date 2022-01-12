import React from 'react';
import './Header.css';

function Header({user}:{user: string}){
    let person:string = user;
    return( 
        <div className="Header">
            <header>
                Ice Cream Wars <span>Welcome {person}</span>
            </header>
        </div>
    ) 
}

export default Header;