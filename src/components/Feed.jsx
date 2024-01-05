import LeftNav from './LeftNav'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import { nanoid } from '@reduxjs/toolkit'
import { FaExternalLinkAlt } from "react-icons/fa";

import VideoCardSk from '../Skeleton/VideoCardSk'

function Feed() {
  const { loading, searchResults } = useSelector((state) => state.Youtube);

  return (
    <div className='flex top-14 h-[calc(100%-56px)]'>
      <LeftNav />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
        <div className='flex flex-row flex-wrap gap-4 p-5 justify-center'>

          {loading && (
            <>
              <VideoCardSk /> <VideoCardSk /> <VideoCardSk />
              <VideoCardSk /> <VideoCardSk /> <VideoCardSk />
              <VideoCardSk /> <VideoCardSk /> <VideoCardSk />
              <VideoCardSk /> <VideoCardSk /> <VideoCardSk />
            </>
          )}

          {!loading && searchResults &&
            (<div>
              <a href='https://my-dev-folio-eight.vercel.app/' target='_blank' rel="noreferrer">
                <div className='flex flex-col mb-8 flex-wrap w-[90%] md:w-[280px] m-auto'>
                  <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden hover:opacity-[0.6]'>
                    <img className='h-full w-full object-cover'
                      src='/Sponsored Image.png'
                      alt='MyDevFolio'
                    />
                    <FaExternalLinkAlt className='absolute bottom-2 right-2 bg-black py-1 px-1 text-white text-2xl rounded-md' />
                  </div>
                  <div className='flex text-white mt-3'>
                    <div className='flex flex-col ml-3 overflow-hidden'>
                      <span className='text-sm font-bold line-clamp-2'>
                        Want to know about the creator?
                        Click to view my Dev PortFolio
                      </span>
                      <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
                        MyDevFolio
                      </span>
                      <div className='flex text-[12px] text-white/[0.7] truncate overflow-hidden font-bold'>
                        <span>
                          From Creator
                        </span>
                        <span className='text-[24px] font-bold text-white/[0.7] relative top-[-15px] mx-1'>
                          .
                        </span>
                        <span className='truncate'>
                          ANAND YADAV
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>)
          }
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
