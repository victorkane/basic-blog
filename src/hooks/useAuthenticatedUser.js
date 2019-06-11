import React from 'react'
import useLocalStorage from './useLocalStorage'

const authList = [
  {user: "fredred", password: "red1212"},
  {user: "sueblue", password: "blue3434"},
  {user: "yellowsunshine", password: "yellow2121"},
  {user: "<<noauth>>", password: null},
]

function useAuthenticatedUser() {
  // Initialize state
  // If at app start local storage holds a value for key theme, it will be returned in 
  const [user, setUser] = useLocalStorage("user", "")
  // Stage setter function
  const setAuthUser = (u, p) => {
    // find match in authList
    const theAuthUser = authList.find( member => {
      return member.user === u && member.password === p
    })
    console.log('theAuthUser', theAuthUser)
    setUser("user", theAuthUser.user)
  }

  return [
    user,
    setAuthUser
  ]
}

export default useAuthenticatedUser
