import React from 'react'
import './CardInfo.css'
import { GrClose } from "react-icons/gr";
export const CardInfo = ( { heading, icons ,handleClick, fullWork } ) =>{
    return (
        <div className={`drop-menu ${fullWork ? "active":""}`}>
            <GrClose className={ `icon ` } onClick={ handleClick } />
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
            </div>
        </div>
    )
}
