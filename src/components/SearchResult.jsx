import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../Api/YoutubeApi'
import LeftNav from './LeftNav'
import SearchResultVideoCard from './SearchResultVideoCard'
import { setLoading } from '../redux/YoutubeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SearchResultsSk from '../Skeleton/SearchResultsSk'

function SearchResult() {
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState();
  const { searchQuery } = useParams();
  const { loading } = useSelector((state) => state.Youtube);

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery])

  const fetchSearchResults = () => {
    dispatch(setLoading(true));
    setSearchResult([]);
    // console.log(loading);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      // console.log(res.data.contents);
      setSearchResult(res.data.contents);
      dispatch(setLoading(false));
      // console.log(loading);
    })
  }

  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black px-3'>
      {loading && (
        <>
        <SearchResultsSk /> <SearchResultsSk /> <SearchResultsSk />
        <SearchResultsSk /> <SearchResultsSk /> <SearchResultsSk />
        </>
      )}
        
        {searchResult?.map((item) => {
          if (item?.type !== 'video') return false;
          return (
            <SearchResultVideoCard
              key={item?.video?.videoId}
              video={item?.video}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SearchResult