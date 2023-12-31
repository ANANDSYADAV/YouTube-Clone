import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMobileMenu } from '../redux/YoutubeSlice'
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SlMenu } from 'react-icons/sl'
import { IoIosSearch } from 'react-icons/io'
import { RiVideoAddLine } from 'react-icons/ri'
import { FiBell } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import { FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { setLoading } from '../redux/YoutubeSlice'

function Header() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const { mobileMenu } = useSelector((state) => state.Youtube);

  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "SearchButton") && searchQuery?.length > 0) {
      dispatch(setLoading(true));
      navigate(`/searchResult/${searchQuery}`);
    }
  }

  const mobileMenuToggle = () => {
    dispatch(setMobileMenu(!mobileMenu));
  }

  const { pathname } = useLocation();
  const pageName = pathname?.split('/')?.filter(Boolean)?.[0];

  const handleClearSearchBar = () => {
    if (searchQuery.length > 0) {
      setSearchQuery('');
    }
  }

  return (
    <div className='sticky top-0 z-10 flex felx-row items-center justify-between pt-[5px] pb-[15px] h-[56px] px-2 sm:px-4 md:px-5 bg-black'>
      <div className='flex h-5 items-center'>
        {pageName !== 'video' && (
          <div className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]' onClick={mobileMenuToggle}>
            {mobileMenu ? (<CgClose className='text-white text-xl' />) : (<SlMenu className='text-white text-xl' />)}
          </div>
        )}
        <Link to='/' className='flex h-5 items-center'>
          <div className='hidden md:flex flex-row'>
            <FaYoutube className='text-5xl text-red-600' />
            <h3 className='text-white flex flex-row items-center ml-1 font-semibold text-3xl'>YouTube</h3>
          </div>
          <FaYoutube className='text-4xl text-red-600 md:hidden mr-1' />
        </Link>
      </div>
      <div className='group flex items-center'>
        <div className='flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 items-center'>
          <input
            type="text"
            placeholder='Search'
            className={`text-xl flex items-center bg-transparent outline-none text-white pr-1 pl-5 pb-1 md:pl-0 w-11/12 sm:w-64 lg:w-[500px]`}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
          <CgClose className={`${searchQuery?.length > 0 ? 'block' : 'hidden'} text-white text-[25px] rounded-full hover:bg-gray-300/[0.6] hover:cursor-pointer p-1`} onClick={handleClearSearchBar} />
        </div>
        <button className='bg-gray-700 h-8 md:h-10 w-10 items-center justify-center rounded-r-3xl' onClick={() => searchQueryHandler('SearchButton')}>
          <IoIosSearch className='text-white text-xl m-auto' />
        </button>
      </div>
      <div className='flex items-center justify-end'>
        <div className='flex hidden sm:flex'>
        <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
          <RiVideoAddLine className='text-white text-2xl cursor-pointer' />
        </div>
        <div className='flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
          <FiBell className='text-white text-2xl cursor-pointer' />
        </div>
        </div>
        <div className='flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
          <CgProfile className='text-white text-2xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Header