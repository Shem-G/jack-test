import React from 'react'
import { Link } from 'react-router-dom'

const PostListing = (props) => (
    <div key={props.post.id} className="border-bottom my-3 text-left">
        <h3>{`${props.post.title}`}</h3>
        <p>{`${props.post.content.text}`}</p>
        <p></p>
        <Link to={`/post/${props.post.slug}`}>
            <button className="btn btn-link px-0">Read More</button>
        </Link>
    </div>
)
export default PostListing;
