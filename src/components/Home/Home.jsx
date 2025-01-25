import React from 'react'
import './Home.css'
import { teeth5 } from '../../assets/images/export'
export const Home = () => {
    return (
        <div className='landing' id='home'>
            <div className="landing-background">
            <img src={teeth5} alt="dentist" />
            </div>
            <div className="landing-content">
                <h1>Creating Beautiful Smiles</h1>
                <p>We Make Smiles Healthy and Strong! For Cosmetic, Family & Implant Dentistry</p>
                <span className="material-symbols-outlined">                </span>
            </div>
        </div>
    )
}

