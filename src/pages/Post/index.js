import React from 'react'
import { PostListProvider } from '../../context'
import FullPost from './FullPost'
import './index.scss'

const Post = (props) => (
  <PostListProvider>
    <FullPost id = {props.match.params.id} />
  </PostListProvider>
)

export default Post
