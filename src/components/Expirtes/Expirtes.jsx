import React from 'react'
import './Expirtes.css'
import { sara } from '../../assets/images/export';

export const Expirtes = () => {
    return (
        <div className='expirtes' id="expir">
            <div className="expirtes-info">
                {/* <div className="info">
                    <p>Hi my name is Sara, i'm 28 years old dentist.I have been working in Iraq for the last three years,
                        I have a major Expireance in fixing teeth </p>
                    <h3>You can download my cv from here,</h3>
                    <div className="resume">
                        <button>
                            <a href='#home' download="">Download CV</a>
                        </button>
                    </div>
                    <h4> and check out alittle of my job down below:</h4>
                </div> */}
                <div className="self-image">
                    <img src={sara} alt="" />
                </div>
            </div>
        </div>
    )
}
