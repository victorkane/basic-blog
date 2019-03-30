import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './index.scss'

const Posts = () => {
  return (
    <Container className="Posts">
      <Row>
        <Col>
          <Card><Card.Title>Posts</Card.Title></Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Posts
