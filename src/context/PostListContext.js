import React, { useState, useEffect } from "react";
import axios from 'axios'

// file obtained by: curl https://jsonplaceholder.typicode.com/posts > posts.json
const categories = [ 'catagory1', 'category2', 'category3', 'category4' ]
// For random number see https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

export const PostListContext = React.createContext({});

export const PostListProvider = props => {
  const [somePosts, setSomePosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resultPosts = await axios('https://jsonplaceholder.typicode.com/posts')
      const thePosts = resultPosts.data.slice(0, 8).map(post => { return { ...post, category: categories[Math.floor(Math.random() * 4)] }})
      setSomePosts(thePosts)
    }
    fetchData()
  }, [])
  return (
    <PostListContext.Provider value={{"somePosts": somePosts, categories}}>
      <div>{props.children}</div>
    </PostListContext.Provider>
  );
};
