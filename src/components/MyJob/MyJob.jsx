import React from 'react'
import './MyJob.css'
import { Cards } from '../Cards/Cards';
import { JOBS } from '../../Utils/data';
export const MyJob = () => {
    return (
        <div className='my-job' id='my_job'>
            <div className="my-job-heading">
            <h4>My Job</h4>
            <p>CLICK ON EACH CARD TO SEE THE FULL WORK WITH DESCRIPTION</p>
            </div>
            <div className="my-job-cards">
                <Cards ele={JOBS} keyword={true}/>
            </div>
        </div>
    )
}
