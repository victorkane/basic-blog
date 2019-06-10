import React, { useContext, useEffect } from 'react'
import { NavBarContext } from '../../layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './index.scss'

const LoginForm = () => (
  <Card.Body>
	  Form
  </Card.Body>
)

const CoolContent = () => (
  <Card.Body>
    Really cool members' only content
  </Card.Body>
)

const Archive = () => {
  // something like useAuthenticatedUser -> like DarkTheme, looks to see if there's a user, otherwise...
  const contextNavBar = useContext(NavBarContext)
  useEffect (() => {
    contextNavBar.searchRef.current.focus();
  }, [])
  return (
    <Container className="Archive">
      <Row>
        <Col>
          <Card>
					  <Card.Title>Archive</Card.Title>
						<CoolContent />
					</Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Archive
