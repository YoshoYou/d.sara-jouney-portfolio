import React, { useState } from 'react'
import './Cards.css'
import { JOBS } from '../../Utils/data';
// import { GrClose } from "react-icons/gr";
import {CardsMenu} from '../Cards/CardsMenu/CardsMenu'
import { CardInfo } from './CardsInfo/CardInfo';
// import { img1, img10, img11, img12, img13, img14, img15, img16, img2, img3, img4, img5, img6, img7, img8, img9 } from '../../assets/images/export';
export const Cards = () =>
{
    const [ selectedSkill, setSelectedSkill ] = useState( JOBS[ 0 ] );
    const [ fullWork, setFullWork ] = useState( false );
    const handleClick = (  ) =>
    {
        setFullWork( !fullWork );
    }
    const handleSelectSkill = ( data ) =>
    {
        setSelectedSkill( data );
    }
    return (
        <>
            <div className={`card-container `} >
                {
                    JOBS.map( ( item ) => (
                        <CardsMenu
                            key={item.key}
                            description={ item.description }
                            icon1={item.icons[0]}
                            icon2={item.icons[1]}
                            isActive={ selectedSkill.title === item.title }
                            onClick={ () =>
                            {
                                handleSelectSkill( item );
                                handleClick();
                            } }
                            
                        />
                    ))
                }
                <div className="add-new">
                <CardInfo  
                        heading={ selectedSkill.title }
                        
                    icons={selectedSkill.icons}
                    key={ selectedSkill.key }
                    description={ selectedSkill.description }
                        fullWork={ fullWork }
                        handleClick={handleClick}
                />
                </div>
            </div>
            </>
    )
}