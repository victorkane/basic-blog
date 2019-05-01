import React, { useState, useEffect, useContext } from 'react'
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
  useEffect( () => {
    if (fullPost.title) {
      const docTitle = document.title
      document.title = `${docTitle} | ${fullPost.title}`
    }
  }, [fullPost])
  if (postList.length > 0) {
    // console.log('the full post being rendered',  fullPost)
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
    // first time only, once context is here
    if (Object.keys(context.somePosts).length > 0 && postList.length === 0) {
      // console.log('context in full post', context)
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
