import React from 'react'
import * as data from '../content/theatre-entries.json'
import TheatreEntry from '../components/theatre-entry'


export default function Theatre() {
    console.log(data.theatreentries)
    
    return (
        <div className="row mx-3 mb-3">

            <div className="col-sm-12 float-md-left text-left">
                <span>
                    <h1>Theatre</h1>
                    <h5>It's almost unbelievable that my interest in theatre began with my mother telling me I should try acting after seeing me pretend
                 to glide through the air as Knuckles the Echidna to my brother's Sonic the Hedgehog. But that's how it happened.</h5>
                    <p>I was soon after introduced to one of the most important people in my life; Gavin Dutot, who was a youth theatre group leader. It was through acting in his shows, making silly films and basically getting into trouble together that I seriously considered acting as a viable life-choice.</p>
                    <p>Since then I've studied European Theatre Arts at Rose Bruford College of Theatre & Performance, performed in amazing theatres all across the world including in the UK, Spain, Portugal, Poland, Russia, Italy, Romania, Moldova, Slovakia, Japan and probably a few others not on the top of my head and began working as a director and drama teacher.</p>
                    <p>Theatre is an incredibly important art form to me which has taught me ways to express myself creatively and helped me to find my own artistic voice.​</p>
                </span>
            </div>

                        <div className="row">
                            <TheatreEntry entryData={data.theatreentries} />
                        </div>
        </div>

    )
}