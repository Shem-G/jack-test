import React, { Component } from 'react'
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom'

const InButtons = props => {
    return (
<div className="row justify-content-center py-3">
    <div className="col">
        <Link to="/what-i-write"><Button className="btn btn-index">Writing</Button></Link>
        </div>
        <div className="col">
        <Link to="/articles"><Button className="btn btn-index">Articles</Button></Link>
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