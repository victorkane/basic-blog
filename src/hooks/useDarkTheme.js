import React from 'react'
import useLocalStorage from './useLocalStorage'

function useDarkTheme() {
  // Initialize state
  // If at app start local storage holds a value for key theme, it will be returned in 
  const [theme, setTheme] = useLocalStorage("theme", "")
  // Stage setter function
  const toggleTheme = (newTheme) => {
    // console.log('newTheme', newTheme)
    // Element where class defines the theme
    const postsEl = document.getElementsByClassName('Posts')
    theme && postsEl[0].classList.remove(theme)
    newTheme && postsEl[0].classList.add(newTheme)
    setTheme(newTheme);
  }

  React.useEffect( () => {
    const postsEl = document.getElementsByClassName('Posts')
    console.log('initial theme', theme)
    if (theme === "dark") {
      postsEl[0] && postsEl[0].classList.add(theme)
    }
  }, [])

  return [
    theme,
    toggleTheme
  ]
}

export default useDarkTheme
