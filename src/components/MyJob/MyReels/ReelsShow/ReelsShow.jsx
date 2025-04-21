import React, { useRef } from 'react'
import './ReelsShow.css'
import { ReusableButton } from '../../ReusableButton/ReusableButton';
export const ReelsShow = ( { v, fullWork,fullWorkHandler} ) =>
{
    const videoRef = useRef();
    const videoOnClick = () =>
    {
        const video = videoRef.current;
        fullWorkHandler();
        if ( fullWork )
        {
            video.pause();
        }
        else
        {
            video.play();
        }
    }
    return (
        <div className={ `reels-show-container ${ fullWork ? "active" : "passive" }`}>
            <ReusableButton  onClick={ videoOnClick } />
            <div className='v-container'>
            <video src={v}  ref={videoRef} controls autoPlay muted loop/>
            </div>
        </div>
    )
}
