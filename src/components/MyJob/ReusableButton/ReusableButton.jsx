import React from 'react'
import './ReusableButton.css'
import { GrClose } from 'react-icons/gr';
export const ReusableButton = ({onClick}) => {
    return (
        <div>
            <GrClose className={ `icon ` } onClick={ onClick } />
        </div>
    )
}
