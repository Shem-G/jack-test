import React from 'react'
import jack from '../images/jack.png'

export default function WhoAmI() {
    return (
        <div className="row mt-3">
            
            <div className="col-sm-12 col-md-8 float-md-left text-left">
            <p>
            <h1>Who am I?</h1>
            <p>Good question! Who are any of us really?</p>
            <p>Well, my name is Jack Owen.</p>
            <p>As my name implies I like to consider myself a ‘Jack of All Trades’. I’m an aspiring writer, an actor, a teacher and a friend to anyone who needs it.</p>
            <p>I’m English but I don’t live in England. In fact I love to live everywhere and travel at any/every opportunity I can. Wherever I go I discover new people, things and stories.</p>      
            <p>Through writing I’ve discovered many fascinating and inspiring things which I would like to share on Sketches & Scratches.</p>
            <p>I've written 5 novels but published exactly none! This is something I'm hoping to remedy and you can help! Please consider joining my mailing list for any updates I post.</p>
            <p>Also, feel free to shoot me an email if you like.</p>
            </p>
            </div>
            <div className="col-sm-12 col-md-4 mb-3 order-first order-md-last mx-auto float-md-right">
                <img src={jack} alt="Jack Owen" className="mx-auto"></img>
                <p className="d-none d-md-block w-75 text-align-left mx-auto text-secondary">This is a picture of a younger, better me! To say I look exactly the same would be a stretch... but you get the idea!</p>
            </div>
            
            
        </div>
        
    )
}