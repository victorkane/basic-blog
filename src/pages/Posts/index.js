import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import './index.scss'

// file obtained by: curl https://jsonplaceholder.typicode.com/posts > posts.json
import posts from '../../data/posts.json'

const categories = [ 'catagory1', 'category2', 'category3', 'category4' ]

// For random number see https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const somePosts = posts.slice(0, 8).map(post => { return { ...post, category: categories[Math.floor(Math.random() * 4)] }})

const Posts = () => {
  const [postList] = useState(somePosts)
  const [categoryList] = useState(categories)
  const [selectedCategory, setCategory] = useState("")

  const handleOptionChange = changeEvent => {
    setCategory(changeEvent.target.value)
  }
  const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    setCategory("")
  };
  const thePosts = postList.map(post => {
    if (selectedCategory === "" || selectedCategory === post.category) {
      return <ListGroup.Item
        key={post.id}
        variant="flush">
        <h5>{post.title}</h5>
        {post.body.substr(0,80) + '...'}
        <p><small><strong>{post.category}</strong></small></p>
      </ListGroup.Item>
    } else {
      return null;
    }
  })
  const theCategoryOptions = categoryList.map((category,i) => {
    return <Form.Check 
              key={i}
              type="radio"
              onChange={handleOptionChange}
              value={category}
              label={category}
              checked={selectedCategory === category}
           >
           </Form.Check>
    })
  return (
    <>
       <Container className="Posts mb-4">
          <Row>
            <Col className="p-4">
              <Card style={{height:300 + 'px'}}>
                <Card.Body>
                  <Card.Title className="px-4 pt-0 pb-0">Filter by Post category</Card.Title>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Label>Select a category to filter posts</Form.Label>
                        {theCategoryOptions}
                        <Button className="mt-4" variant="primary" type="submit">
                          Clear Selection
                        </Button>
                    </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Title>
                  Posts
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="post-text-length">
                      Set Text Length
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>40 chars</Dropdown.Item>
                      <Dropdown.Item>80 chars</Dropdown.Item>
                      <Dropdown.Item>120 chars</Dropdown.Item>
                      <Dropdown.Item>160 chars</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Title>
                <ListGroup>
                  {thePosts}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Posts
