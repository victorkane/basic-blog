import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './index.scss'

const Archive = () => {
  return (
    <Container className="Archive">
      <Row>
        <Col>
          <Card><Card.Title>Archive</Card.Title></Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Archive
