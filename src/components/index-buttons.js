import React, { Component } from 'react'
import Button from "react-bootstrap/Button"


const InButtons = props => {
    return (
<div className="row">
    <div className="col align-self-center">
        <Button className="btn px-5 mx-5 btn-index">Writing</Button>
        <Button className="btn px-5 mx-5 btn-index">Articles</Button>
        </div>

</div>
    )
}

class IndexButtons extends Component {
    render() {
        return (
            <InButtons />
        )
    }
}

export default IndexButtons