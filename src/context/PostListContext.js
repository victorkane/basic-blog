import React, { useState } from "react";

// file obtained by: curl https://jsonplaceholder.typicode.com/posts > posts.json
import posts from '../data/posts.json'
const categories = [ 'catagory1', 'category2', 'category3', 'category4' ]
// For random number see https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const thePosts = posts.slice(0, 8).map(post => { return { ...post, category: categories[Math.floor(Math.random() * 4)] }})

export const PostListContext = React.createContext({});

export const PostListProvider = props => {
  const [somePosts] = useState({ thePosts });
  return (
    <PostListContext.Provider value={{"somePosts" : somePosts.thePosts, categories}}>
      <div>{props.children}</div>
    </PostListContext.Provider>
  );
};
