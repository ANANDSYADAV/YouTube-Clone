import React from 'react'

function VideoLength({ time }) {
    let hr = Math.floor(time / 3600);
    let rem1 = time - hr * 3600;
    let min = Math.floor((rem1 / 60));
    let rem2 = rem1 - min * 60;
    let sec = rem2;

    const length = `${hr ? `${hr}:`: ''}${(`${hr ? `0${min}` : `${min}`}`).slice(-2)}:${(`0${sec}`).slice(-2)}`;

    return (
        <div className='absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md'> 
            {length}
        </div>
    )
}

export default VideoLength