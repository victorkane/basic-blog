import React, { useContext, useEffect } from 'react'
import { NavBarContext } from '../../layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './index.scss'

const Archive = () => {
  const context = useContext(NavBarContext)
  useEffect (() => {
    context.searchRef.current.focus();
  }, [])
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
