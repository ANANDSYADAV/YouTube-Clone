import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SearchResultsSk() {
    return (
        <div className="flex flex-col md:flex-row mb-8 md:mb-3 rounded-xl md:p-4">
            <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl overflow-hidden">
                <Skeleton height={'100%'} width={400} />
            </div>
            <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
                <span className="text-lg md:text-2xl font-semibold line-clamp-2 text-white">
                    <Skeleton height={20} width={'100%'} />
                </span>
                <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-4">
                    <Skeleton height={14} width={390} />
                </span>
                <div className="hidden md:flex items-center">
                    <div className="flex items-start mr-3">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden">
                            <Skeleton circle={true} height={36} width={36} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold mt-2 text-white/[0.7] flex items-center">
                            <Skeleton height={5} width={200} count={2} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultsSk