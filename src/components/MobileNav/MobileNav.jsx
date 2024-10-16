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
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF" className="btn" onClick={ toggleMenu }><path d="m679-361-42-42 95-95q22.86-22.72 35.43-53.39T780-615q0-69-48-117t-116.76-48q-33.24 0-63.89 12.57T498-732l-95 95-42-42 95-95q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73l-95 95ZM345-180q32 0 63.01-12.57Q439.03-205.14 462-228l90-90-234-234-89.7 89.7Q205-439 192.5-408.42 180-377.84 180-345q0 69 48 117t117 48ZM813-57 594-276l-90 90q-32 32-73 49t-86 17q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l90-90L64-806l43-43L856-99l-43 42ZM435-435Zm85-85Z"/></svg> */}
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

