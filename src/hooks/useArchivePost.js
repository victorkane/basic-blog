import React, { useState, useEffect } from 'react'
import axios from 'axios'

const postPost = async (post) => {
  try {
    const res = await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        title: post.title,
        body: post.body,
        userId: 1
      }
    })
		console.log("res in func", res)
		return res
  } catch (err) {
      console.log('postPost err', err)
  }
}

function useArchivePost() {
  // Initialize state
  // If at app start local storage holds a value for key theme, it will be returned in 
  const [res, setRes] = useState()
	const [post, setPost] = useState()
	useEffect( () => {
	  setRes(postPost(post))
	}, [])

  // Stage setter function
	/*
  const archivePost = (post) => {
		setPost(post)
	}
  return [
    res,
    archivePost
  ]
	*/
	return [res]
}

export default useArchivePost
