import React from 'react'
import './Cards.css'
import { JOBS } from '../../Utils/data';
export const Cards = () => {
    return (
        <>
            <div className="card-container">
                { JOBS.map( ( item ) => (
                    <div className="card-content">
                        <div className="card-info">
                            <p>{ item.description }</p>
                        </div>
                        <div className="card-imgs">
                            {
                                item.icons.map((icon)=>(
                                    <img src={icon} alt="" />
                                ))
                            } 
                        </div>
                    </div>
                ))}
            </div>
            </>
    )
}
