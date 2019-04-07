import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './index.scss'

const Post = (props) => {
  return (
    <Container className="Post">
      <Row>
        <Col>
          <Card><Card.Title>{props.match.params.id}</Card.Title></Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Post
