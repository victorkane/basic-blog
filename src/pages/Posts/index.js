import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
// file obtained by: curl https://jsonplaceholder.typicode.com/posts > posts.json
import posts from '../../data/posts.json'
import './index.scss'

const categories = [ 'catagory1', 'category2', 'category3', 'category4' ]

class Posts extends Component {
  // For random number see https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  state = {
    posts: posts.slice(0, 6).map(post => { return { ...post, category: categories[Math.floor(Math.random() * 3)] }})
  }

  render () {
    const thePosts = this.state.posts.map(post => {
      return <ListGroup.Item
          key={post.id}
          variant="flush">
          <h5>{post.title}</h5>
          {post.body.substr(0,80) + '...'}
        </ListGroup.Item>
    })
    return (
      <Container className="Posts">
        <Row>
          <Col>
            <Card><Card.Title>Posts
              </Card.Title>
                <ListGroup>
                  {thePosts}
                </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Posts
