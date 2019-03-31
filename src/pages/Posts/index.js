import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
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
				<small><strong>{post.category}</strong></small>
      </ListGroup.Item>
		} else {
		  return null;
	  }
  })
  const theCategoryOptions = categoryList.map((category,i) => {
		return <div className="form-check" key={i}>
        <label>
				  <input
            type="radio"
            name="react-tips"
            value={category}
            checked={selectedCategory === category }
					  onChange={handleOptionChange}
            className="form-check-input"
			    />
					  {category}
			  </label>
      </div>
    })
  return (
  	<>
       <Container className="Filter mb-4">
          <Row>
				    <Col className="mt-4 p-4" sm={12}>
				      <Card>
				        <Card.Title className="px-4 pt-4 pb-0">Filter by Post category</Card.Title>
				        <Card.Body>
                    <form onSubmit={handleFormSubmit}>
					            {theCategoryOptions}
                      <div className="form-group">
				                <div>Show posts with selected category</div>
                        <button className="btn btn-primary mt-2" type="submit">
                          Clear Selection
                        </button>
                      </div>
                    </form>
				        </Card.Body>
				      </Card>
            </Col>
				  </Row>
			  </Container>
        <Container className="Posts">
          <Row>
            <Col sm={12}>
              <Card>
							  <Card.Title>Posts</Card.Title>
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
