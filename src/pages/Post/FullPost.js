import React, { useState, useContext } from 'react'
import { PostListContext } from "../../context"
import moment from 'moment'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './index.scss'

const FullPost = (props) => {
	const context = useContext(PostListContext)
  const [postList, setPostList] = useState([])
  const [fullPost, setFullPost] = useState({})
  // console.log(fullPost)
  if (postList.length > 0) {
  return (
    <Container className="Post">
      <Row>
        <Col>
          <Card className="mt-2 px-4 py-4">
            <Card.Title>{fullPost.title}</Card.Title>
            <Card.Text>{fullPost.body}</Card.Text>
            <Card.Text><small><strong>{fullPost.category}</strong></small></Card.Text>
            <Card.Text><small>{moment(fullPost.postDate).format('MM/DD/YYYY')}</small></Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  )
  } else {
    // has the data come in for the first time?
    // yes, grab it and set the fullpost and posts state
    // grab post from url id
    if (Object.keys(context.somePosts).length > 0 && postList.length === 0) {
      const theFullPost = context.somePosts.find(element => {
        return (parseInt(element.id) === parseInt(props.id))
  })
      setPostList(context.somePosts)
      setFullPost(theFullPost)
    }
    return <div className="spinner-border text-primary m-4" role="status"> <span className="sr-only">Loading...</span> </div>
  }
}

export default FullPost
