import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function VideoCardSk() {
    return (
        <div className='flex flex-col mb-8 flex-wrap w-[90%] md:w-[280px] m-auto'>
            <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
                <Skeleton height={190} width={'100%'} />
            </div>
            <div className='flex text-white mt-3'>
                <div className='flex items-start'>
                    <div className='flex h-9 w-9 rounded-full overflow-hidden'>
                        <Skeleton circle={true} height={36} width={36} />
                    </div>
                </div>
                <div className='flex flex-col ml-3 overflow-hidden'>
                    <span className='text-sm font-bold line-clamp-2'>
                    <Skeleton height={5} width={200} count={2} />
                    </span>
                    <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
                        <Skeleton height={3} width={150} count={2} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default VideoCardSk