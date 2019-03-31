import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
//import InputGroup from 'react-bootstrap/InputGroup'
//import FormControl from 'react-bootstrap/FormControl'
// file obtained by: curl https://jsonplaceholder.typicode.com/posts > posts.json
import posts from '../../data/posts.json'
import './index.scss'

const categories = [ 'catagory1', 'category2', 'category3', 'category4' ]

class Posts extends Component {
  // For random number see https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  state = {
    posts: posts.slice(0, 6).map(post => { return { ...post, category: categories[Math.floor(Math.random() * 4)] }}),
    categories: categories,
		selectedCategory: "category2"
  }

  handleOptionChange = changeEvent => {
	  this.setState({
      selectedCategory: changeEvent.target.value
    })
  }

  render () {
    const thePosts = this.state.posts.map(post => {
      return <ListGroup.Item
          key={post.id}
          variant="flush">
          <h5>{post.title}</h5>
          {post.body.substr(0,80) + '...'}
					<small><strong>{post.category}</strong></small>
        </ListGroup.Item>
    })
    const theCategoryOptions = this.state.categories.map(category => {
		  return <div className="form-check">
			  <label>
				  <input
                  type="radio"
                  name="react-tips"
                  value={category}
                  checked={this.state.selectedCategory === category }
									onChange={this.handleOptionChange}
                  className="form-check-input"
					/>
					{category}
			  </label>
			</div>
    })
    return (
      <Container className="Posts">
        <Row>
				<Col>
				 <Card>
				 <Card.Title>Filter by Post category</Card.Title>
				 <Card.Body>
				 <Card.Text>
          <form>
					  {theCategoryOptions}
          </form>
				 </Card.Text>
				 </Card.Body>
				 </Card>
        </Col>
				</Row>
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
