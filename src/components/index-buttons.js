import React, { Component } from 'react'
import Button from "react-bootstrap/Button"


const InButtons = props => {
    return (
<div className="row justify-content-center">
    <div className="col p-0">
        <Button className="btn btn-index">Writing</Button>
        </div>
        <div className="col p-0">
        <Button className="btn btn-index">Articles</Button>
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