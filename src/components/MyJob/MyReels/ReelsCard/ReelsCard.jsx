import React from 'react'
import './ReelsCard.css'
export const ReelsCard = ( { v, des, title, ekey, isActive, onClick } ) =>
{
    return (
        <div className='card-content ' key={ekey}>
            <div className="video" onClick={onClick}>
                <video width="400" height="300"  autoPlay  muted loop >
                    <source  src={v}/>
                </video>
            </div>
            <div className="des" >
                <p >{des}</p>
            </div>
            
        </div>
    )
}
