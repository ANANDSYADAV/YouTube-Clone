import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { IoIosEye } from "react-icons/io";
import { AiOutlineLike } from 'react-icons/ai'
import { abbreviateNumber } from 'js-abbreviation-number'
import { setLoading } from '../redux/YoutubeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataFromApi } from '../Api/YoutubeApi'

import SuggestionVideoCard from './SuggestionVideoCard'

import VideoDetailSk from '../Skeleton/VideoDetailSk'

function VideoDetails() {
  const dispatch = useDispatch();
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { loading } = useSelector((state) => state.Youtube);

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    dispatch(setLoading(true));
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      // console.log(res.data);
      setVideo(res.data);
      dispatch(setLoading(false));
    })
  }

  const fetchRelatedVideos = () => {
    dispatch(setLoading(true));
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      // console.log(res.data);
      setRelatedVideos(res.data);
      dispatch(setLoading(false));
    })
  }

  return (
    <>
      {loading && (
        <VideoDetailSk />
    )}
      {!loading && (
        <div className='flex justify-center flex-row bg-black'>
          <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
              <div className="h-[200px] md:h-[400px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  controls
                  width='100%'
                  height='100%'
                  style={{ backgroundColor: 'black' }}
                  playing={true}
                />
              </div>
              <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2 pb-2">
                {video?.title}
              </div>
              <div className="flex justify-between flex-col md:flex-row mt-4">
                <div className="flex">
                  <div className="flex md:items-start">
                    <div className="flex h-11 w-11 rounded-full overflow-hidden">
                      <img
                        className="h-full w-full object-cover"
                        src={video?.author?.avatar?.[0].url} alt="Avatar" />
                    </div>
                  </div>
                  <div className="flex flex-col ml-3">
                    <div className="text-white text-md font-semibold flex items-center">
                      {video?.author?.title}
                      {video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL' && (
                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                      )}
                    </div>
                    <div className="text-white/[0.7] text-sm">
                      {video?.author?.stats?.subscribersText}
                    </div>
                  </div>
                </div>
                <div className='flex justify-center md:justify-end gap-3'>
                  <div className="flex text-white mt-4 md:mt-0">
                    <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                      <AiOutlineLike className="text-xl text-white mr-2" />
                      {`${abbreviateNumber(video?.stats?.likes, 2)}`}
                    </div>
                  </div>
                  <div className="flex text-white mt-4 md:mt-0">
                    <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                      <IoIosEye className="text-xl text-white mr-2" />
                      {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='text-white bg-white/[0.15] p-3 rounded-3xl mt-4'>
                {video?.description.slice(0, 500)}
              </div>
            </div>
            <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
              {relatedVideos?.contents.map((item, index) => {
                if (item.type !== 'video') return false;
                return (
                  <SuggestionVideoCard key={index} video={item?.video} />
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default VideoDetails