import React from 'react'
import { PostListProvider } from '../../context'
import PostList from './PostList'
import './index.scss'

const Posts = () => (
  <PostListProvider>
    <PostList />
  </PostListProvider>
)

export default Posts
