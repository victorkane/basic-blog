import React, { useContext, useEffect } from 'react'
import { NavBarContext } from '../../layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './index.scss'

const About = () => {
	const context = useContext(NavBarContext)
  useEffect (() => {
    context.searchRef.current.focus();
  }, [])
  console.log('about context', context)
  return (
    <Container className="About">
      <Row>
        <Col>
          <Card><Card.Title>About</Card.Title></Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About;
