
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([])
  const [readingTime, setReadingTime]=useState(0)
  
  const handleBookMark = (blog) => {
    const newBookmarks = [...bookMarks, blog]
    setBookMarks(newBookmarks)
  }
  const handleMarkAsRead = (time,id) => {
    setReadingTime(readingTime + time);
    const newBookMark = bookMarks.filter(item => item.id !== id)
    setBookMarks(newBookMark);
  }
  
  

  return (
    <>
      
      <main className='w-10/12 mx-auto'>
          <Header></Header>
      <div className='flex justify-between gap-5'>
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
      </main>
      
    </>
  )
}

export default App
