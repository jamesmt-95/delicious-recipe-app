// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Pages from './pages/Pages'
import Category from './components/Category'
import Search from './components/Search'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'


import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    //instead of multiple <BrowserRouter> at Pages.jsx & Category.jsx, we can wrap them with <BrowserRouter> here
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Search />
        <Category />
        <Pages />
      </div>
    </BrowserRouter>

  )
}

export default App
