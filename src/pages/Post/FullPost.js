import React, { useContext } from 'react'
import { PostListContext } from "../../context"
import moment from 'moment'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './index.scss'

const FullPost = (props) => {
	const context = useContext(PostListContext)
  const postList = context.somePosts
  const fullPost = postList.find(element => {
    return (parseInt(element.id) === parseInt(props.id))
  })
  // console.log(fullPost)
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
}

export default FullPost
