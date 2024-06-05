
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([])
  
  const handleBookMark = (blog) => {
    const newBookmarks = [...bookMarks, blog]
    setBookMarks(newBookmarks)
  }
  

  return (
    <>
      
      <main className='w-10/12 mx-auto'>
          <Header></Header>
      <div className='flex justify-between gap-5'>
          <Blogs handleBookMark={handleBookMark}></Blogs>
          <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
      </main>
      
    </>
  )
}

export default App
