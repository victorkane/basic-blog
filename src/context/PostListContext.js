import React, { useState, useEffect } from "react";
import axios from "axios";

// file obtained by: curl https://jsonplaceholder.typicode.com/posts > posts.json
const categories = ["catagory1", "category2", "category3", "category4"];
const dates = [
  "2019-01-01",
  "2019-01-15",
  "2019-02-01",
  "2019-03-01",
  "2019-01-01",
  "2019-02-01",
  "2019-04-01",
  "2019-01-01",
];
// For random number see https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

export const PostListContext = React.createContext({});

export const PostListProvider = (props) => {
  const [somePosts, setSomePosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resultPosts = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log("The resultPosts in context", resultPosts);
      const thePosts = resultPosts.data.slice(0, 8).map((post, i) => {
        return {
          ...post,
          category: categories[Math.floor(Math.random() * 4)],
          postDate: dates[i],
        };
      });
      console.log("thePosts in context", thePosts);
      setSomePosts(thePosts);
    };
    fetchData();
  }, []);
  return (
    <PostListContext.Provider value={{ somePosts: somePosts, categories }}>
      <div>{props.children}</div>
    </PostListContext.Provider>
  );
};
