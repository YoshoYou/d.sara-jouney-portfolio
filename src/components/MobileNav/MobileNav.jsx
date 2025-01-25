import React, { useEffect, useRef } from 'react'
import './MobileNav.css';
import { MdOutlineMenuOpen } from "react-icons/md";
export const MobileNav = ( { toggleMenu, openMenu, setOpenMenu } ) =>
{

    let menuRef = useRef();
    useEffect( () =>
    {
        let handler = ( e ) =>
        {
            if ( !menuRef.current.contains( e.target ) )
            {
                setOpenMenu( false );
            }
        };
        document.addEventListener( "mousedown", handler );
        return () =>
        {
            document.removeEventListener( "mousedown", handler );
        }

    } )
    return (
    <>
            <div className={ `mobile-nav ${ openMenu ? "active" : "passive" }` } ref={menuRef}  >
                <MdOutlineMenuOpen className="btn" onClick={ toggleMenu } />
                <div className="mobile-nav-container scale-up-top">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#expir">Experties</a>
                    </li>
                    <li>
                        <a href="#my_job">MyJob</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
                </div>

        </div>
    </>
    )
}

