import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const BlogPost = () => (
    <Query
        query={gql`
        query Posts {
            posts {
              id
              title
              content {
                text
              }
              slug
            }
          }
          `}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading post...</p>
            if (error) return <p>Error: Couldn't load post</p>
            
            return data.posts.map((currentPost) => (
              <div className="">
                
                </div>
            ))
        }}
    </Query>

)

export default BlogPost