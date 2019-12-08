import React from 'react'

const BlogPost = (props) => (
    <div key={props.post.id}>
        <h3>{`${props.post.title}`}</h3>
        <p>{`${props.post.content.text}`}</p>
    </div>
)
export default BlogPost;