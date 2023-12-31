import { useNavigate } from 'react-router-dom';
import { categories } from '../../src/Api/constants'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../redux/YoutubeSlice';
import { setMobileMenu } from '../redux/YoutubeSlice'

import { setLoading } from '../redux/YoutubeSlice';

function LeftNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedCategory, mobileMenu, loading } = useSelector((state) => state.Youtube);

  const handleClick = (name, type) => {
    // no onclick in case of type='menu'
    if (type === 'home' || type === 'category') {
      dispatch(setMobileMenu(false));
      dispatch(setLoading(true));
      // console.log(loading);
      dispatch(setSelectedCategory(name));
    } else {
      return false;
    }
  }

  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-0 bg-black absolute md:relative z-10 md:translate-x-0 transition-all text-white ${mobileMenu ? 'translate-x-0' : 'translate-x-[-240px]'}`}>
      <div className='flex px-5 flex-col text-[15px]'>
        {categories.map((item) => {
          return (
            <div key={item.name} className='my-1 flex flex-col items-center justify-center'>
              <div className={`flex justify-start items-center w-full p-[5px] rounded-l-lg rounded-r-lg hover:bg-[#303030] hover:cursor-pointer ${selectedCategory === item.name ? 'bg-white/[0.15]' : ''}`}
                onClick={() => {
                  handleClick(item.name, item.type)
                  navigate('/');
                }}
              >
                <span className='mx-2 text-white'>{item.icon}</span>  {item.name}
              </div>
              {item.divider && (
                <div className='my-1 border-[1px] w-[90%] border-yellow-300' />
              )}
            </div>
          )
        })}
      </div>
      <div className='mx-auto my-1 border-[1px] w-[80%] border-yellow-300' />
      <p className='text-orange-500 mb-[5px] text-center text-xl'>Clone By AnandSYadav</p>
    </div>
  )
}

export default LeftNav