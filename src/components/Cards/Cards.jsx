import React, { useState } from 'react'
import './Cards.css'
import { JOBS } from '../../Utils/data';
import {CardsMenu} from '../Cards/CardsMenu/CardsMenu'
import { CardInfo } from './CardsInfo/CardInfo';
export const Cards = ({ele}) =>
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
                    ele.map( ( item ) => (
                    
                        <CardsMenu
                            key={item.key}
                            description={ item.description }
                            icon1={item.icons[0]}
                            icon2={ item.icons[ 1 ] }
                            video={item.video}
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
                        video={selectedSkill.video}
                        key={ selectedSkill.key }
                        description={ selectedSkill.description }
                        explanation={selectedSkill.exp}
                        fullWork={ fullWork }
                        handleClick={handleClick}
                    />
                </div>
            </div>
            </>
    )
}