import React from 'react'
import './CardsMenu.css'
export const CardsMenu = ( {title,icon1,icon2,onClick,description} ) =>
{
    return (
        <>
            <div className="card-content" onClick={()=>onClick()}>
                        <div className={ `card-imgs ` }>
                            <img src={icon1  } alt="" />
                            <img src={icon2  } alt="" />
                            
                        </div>
                        <div className={ `card-info ` }>
                            <p>{description}</p>
                        </div>        
            </div>
        </>
    )
}

