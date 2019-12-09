import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PostListing from '../components/postlisting'

const Blog = () => (
  
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
            if (loading) return <p>Loading posts...</p>
            if (error) return <p>Error: Couldn't load posts</p>
            
            return data.posts.map((currentPost) => (
              <div className="">
                <PostListing post={currentPost} />
                </div>
            ))
        }}
    </Query>
)


export default Blog