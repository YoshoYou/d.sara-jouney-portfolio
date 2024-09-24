import React from 'react'
import { Cards } from '../Cards/Cards';
export const MyJob = () => {
    return (
        <div className='my-job'>
            <div className="my-job-heading">
            <h4>My Job</h4>
            <p>CLICK ON EACH CARD TO SEE THE FULL WORK WITH DESCRIPTION</p>
            </div>
            <div className="my-job-cards">
                <Cards/>
            </div>
        </div>
    )
}
