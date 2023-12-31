import React from 'react'
import LeftNav from './LeftNav'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import { nanoid } from '@reduxjs/toolkit'

import VideoCardSk from '../Skeleton/VideoCardSk'

function Feed() {
  const { loading, searchResults } = useSelector((state) => state.Youtube);

  return (
    <div className='flex top-14 h-[calc(100%-56px)]'>
      <LeftNav />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
        <div className='flex flex-wrap gap-4 p-5 justify-center'>
          {loading && (
            <>
              <VideoCardSk /> <VideoCardSk /> <VideoCardSk />
              <VideoCardSk /> <VideoCardSk /> <VideoCardSk />
              <VideoCardSk /> <VideoCardSk /> <VideoCardSk />
              <VideoCardSk /> <VideoCardSk /> <VideoCardSk />
            </>
          )}

          {!loading && searchResults &&
            searchResults?.map((item) => {
              if (item.type !== 'video') return false;
              return (
                <VideoCard key={nanoid()} video={item?.video} />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Feed