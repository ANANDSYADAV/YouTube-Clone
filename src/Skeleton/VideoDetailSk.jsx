import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function VideoDetailSk() {
    return (
        <div className='flex justify-center flex-row bg-black'>
            <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
                    <div className="h-[200px] md:h-[400px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                        <Skeleton width={'100%'} height={'100%'} />
                    </div>
                    <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2 pb-2">
                        <Skeleton height={7} width={'100%'} />
                    </div>
                    <div className="flex justify-between flex-col md:flex-row mt-4">
                        <div className="flex">
                            <div className="flex md:items-start">
                                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                    <Skeleton circle={true} height={44} width={44} />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className="text-white text-md font-semibold flex items-center">
                                    <Skeleton height={5} width={100} />
                                </div>
                                <div className="text-white/[0.7] text-sm">
                                    <Skeleton height={3} width={100} />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-end gap-3'>
                            <div className="flex text-white mt-4 md:mt-0">
                                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                                    <Skeleton height={30} width={100} />
                                </div>
                            </div>
                            <div className="flex text-white mt-4 md:mt-0">
                                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                                    <Skeleton height={30} width={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className='text-white bg-white/[0.15] p-3 rounded-3xl mt-4'>
                        <Skeleton height={3} width={'100%'} count={5}/>
                    </div>
                </div>
                <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                <div className="flex mb-3">
                        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden">
                            <Skeleton height={100} width={'100%'} />
                        </div>
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">
                                <Skeleton height={4} width={150} />
                            </span>
                            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 flex items-center">
                                <Skeleton height={3} width={100} />
                            </span>
                            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold truncate overflow-hidden">
                                <Skeleton height={3} width={120} />
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden">
                            <Skeleton height={100} width={'100%'} />
                        </div>
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">
                                <Skeleton height={4} width={150} />
                            </span>
                            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 flex items-center">
                                <Skeleton height={3} width={100} />
                            </span>
                            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold truncate overflow-hidden">
                                <Skeleton height={3} width={120} />
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden">
                            <Skeleton height={100} width={'100%'} />
                        </div>
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">
                                <Skeleton height={4} width={150} />
                            </span>
                            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 flex items-center">
                                <Skeleton height={3} width={100} />
                            </span>
                            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold truncate overflow-hidden">
                                <Skeleton height={3} width={120} />
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden">
                            <Skeleton height={100} width={'100%'} />
                        </div>
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">
                                <Skeleton height={4} width={150} />
                            </span>
                            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 flex items-center">
                                <Skeleton height={3} width={100} />
                            </span>
                            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold truncate overflow-hidden">
                                <Skeleton height={3} width={120} />
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden">
                            <Skeleton height={100} width={'100%'} />
                        </div>
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">
                                <Skeleton height={4} width={150} />
                            </span>
                            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 flex items-center">
                                <Skeleton height={3} width={100} />
                            </span>
                            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold truncate overflow-hidden">
                                <Skeleton height={3} width={120} />
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden">
                            <Skeleton height={100} width={'100%'} />
                        </div>
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">
                                <Skeleton height={4} width={150} />
                            </span>
                            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 flex items-center">
                                <Skeleton height={3} width={100} />
                            </span>
                            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold truncate overflow-hidden">
                                <Skeleton height={3} width={120} />
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden">
                            <Skeleton height={100} width={'100%'} />
                        </div>
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">
                                <Skeleton height={4} width={150} />
                            </span>
                            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 flex items-center">
                                <Skeleton height={3} width={100} />
                            </span>
                            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold truncate overflow-hidden">
                                <Skeleton height={3} width={120} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetailSk