import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSelectedCategoryData } from './redux/YoutubeSlice'

import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.Youtube);
  
  useEffect(() => {
    dispatch(fetchSelectedCategoryData(selectedCategory));
  }, [selectedCategory]);

  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
            <Route path='/video/:id' element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
