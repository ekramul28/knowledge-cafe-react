
import './App.css'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'

function App() {

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </div>
  )
}

export default App
