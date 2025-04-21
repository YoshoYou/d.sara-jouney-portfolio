import React from 'react'
import './CardInfo.css'
import { ReusableButton } from '../../MyJob/ReusableButton/ReusableButton';
export const CardInfo = ( { heading, icons ,handleClick, fullWork,explanation } ) =>{
    return (
        <div className={`drop-menu ${fullWork ? "active":""}`}>
            <ReusableButton onClick={handleClick} />
            <div className="holder">
                {
                        icons.map( ( icon, index ) => (
                            <React.Fragment key={ `new_${ index }` } >
                                <div className="holder-info">
                                    <span>{heading[index]}</span>
                                    <img src={ icon } alt="" />
                                </div>
                            </React.Fragment>
                        ))
                }
                <div className='exp'>{explanation}</div>
            </div>
        </div>
    )
}
