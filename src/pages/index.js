import React from 'react'
import IndexButtons from '../components/index-buttons'

export default function HomePage() {
    return (
        <div className="row mx-3 text-left index">
            <p>
            <h1>Welcome!</h1>
            <p>My name is Jack Owen. I'm an aspiring writer of middle-grade and Young Adult fiction.</p>
            <p>When writing I take inspiration from many, many different places and have learnt many interesting things.
            I'd like to share some of these things on Sketches & Scratches in the hopes they might inspire you too!</p>
            <p>For now you can read articles on the art & artists which inspired my first novel Sketch.</p> 
                
            <p>Later I'll add some stuff on time travel & scientific theory from the research I did on my second book The Day Time Was Lost and also a section on animals & nature.</p>
                
            <h4>Be sure to check out the What I Write section to learn more about my books!</h4>
            </p>
            <div classname="row">
                <IndexButtons />
            </div>
        </div>
        
    )
}