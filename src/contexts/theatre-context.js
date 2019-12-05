import React, { Component } from 'react'
import axios from 'axios'
import theatreentries from '../content/theatre-entries.json'

export const TheatreContext = React.createContext()

class TheatreContextProvider extends Component {
    state = {
        entries: []
    }

    componentDidMount() {
        const fetchData = () => {
            axios
                .get(theatreentries)
                .then(({ data }) => {
                        this.setState({
                            entries: data
                        })
                    })
                .catch(console.log)
        }
        fetchData();
    }
    
    
    render(){
        return (
            <TheatreContext.Provider value={{...this.state}}>
                {this.props.children}
            </TheatreContext.Provider>
        )
    }
}

export default TheatreContextProvider
