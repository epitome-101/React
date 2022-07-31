import React from "react"

export default function Header(){
    return(
        <header>
            <img src="./images/mypic.jpeg" />
            <h1>Saksham Midha</h1>    
            <h3>Frontend Developer</h3>
            <h4>sakshammidha.website</h4>
            <button className="button-1">Email</button>
            <button className="button-2">LinkedIn</button>
        </header>
    )
}