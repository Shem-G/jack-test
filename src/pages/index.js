import React from 'react'
import IndexButtons from '../components/index-buttons'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            <div className="row mx-3 mb-3 text-left index">
                <h1>Welcome!</h1>
                <div>
                <p>My name is Jack Owen. I'm an aspiring writer of middle-grade and Young Adult fiction.</p>
                <p>When writing I take inspiration from many, many different places and have learnt many interesting things.
            I'd like to share some of these things on Sketches & Scratches in the hopes they might inspire you too!</p>
                <p>For now you can read articles on the art & artists which inspired my first novel Sketch.</p>

                <p>Later I'll add some stuff on time travel & scientific theory from the research I did on my second book The Day Time Was Lost and also a section on animals & nature.</p>

                <h4>Be sure to check out the <Link to="/what-i-write">What I Write</Link> section to learn more about my books!</h4>
                </div>
            </div>
            <IndexButtons />
        </div>

    )
}