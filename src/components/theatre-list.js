
import React, { Component } from 'react'
import { TheatreContext } from '../contexts/theatre-context';
import { TheatreEntry } from './theatre-entry'

class TheatreList extends Component {
    static contextType = TheatreContext
    render(){
        const { entries } = this.context
        return(
                <TheatreEntry entryData={entries} />
        )}
}

export default TheatreList