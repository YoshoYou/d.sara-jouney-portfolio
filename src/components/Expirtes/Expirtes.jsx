import React from 'react'
import './Expirtes.css'
import { sara } from '../../assets/images/export';
export const Expirtes = () => {
    return (
        <div className='expirtes' id="expir">
            <div className="expirtes-info">
                <div className="info">
                    <div className="icons">
                    <span className='icon-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg>
                    </span>
                    <span className='name'>dr.sara jouney</span>
                    <span className='icon-2'>
                        <svg xmlns="http://www.w3.org/2000/svg"  height="30px" viewBox="0 0 20 20" width="30px" fill="#000000"><g><g><rect fill="none" height="20" width="20"/></g></g><g><polygon points="4.59,16.59 6,18 14,10 6,2 4.59,3.41 11.17,10"/></g></svg>
                    </span>
                    </div>
                    <p className='about-me'>Hi my name is Sara, i'm 28 years old dentist.I have been working in Iraq for the last three years,
                        I have a major Expireance in fixing teeth </p>
                    <h3>You can download my cv from here,</h3>
                    <div className="resume">
                        <button>
                            <a href='#home' download="">Download CV</a>
                        </button>
                    </div>
                    <h4> and check out alittle of my job down below:</h4>
                </div>
                <div className="self-image">
                    <img src={sara} alt="" />
                </div>
            </div>
        </div>
    )
}
