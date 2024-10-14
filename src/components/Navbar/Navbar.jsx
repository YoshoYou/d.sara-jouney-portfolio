import React, { useState } from 'react'
import './Navbar.css'
import { MobileNav } from "../MobileNav/MobileNav"
import { RiMenu3Fill } from "react-icons/ri";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />;
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />;
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=dentistry" />
const Navbar = () =>
{
    const [ openMenu, setOpenMenu ] = useState( false );
    const toggleMenu = () =>
    {
        setOpenMenu( !openMenu );
    }
    return (
        <>
        <MobileNav toggleMenu={toggleMenu} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <div className='navbar'>
                    <div className="nav-icons">
                        <div className="icon_1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' height="70px" viewBox="0 -960 960 960" width="70px"><path d="M300-840q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm-88 480h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-38 42-90 91T538-158l-58 52-58-52q-69-62-120.5-111T212-360Zm230 40q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h320v-80H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H40v80h297l69 102q6 9 15.5 13.5T442-320Zm38-167Z"/></svg>
                        </div>
                    <div className="nav-menu">
                <a href="#home">Home</a>
                <a href="#expir">Experties</a>
                <a href="#my_job">MyJob</a>
                <a href="#contact">Contact Me</a>
            </div>
        </div>
                { !openMenu &&
                    // <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF" className="btn"  onClick={toggleMenu}><path d="M345-120q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l270-270q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73L504-186q-32 32-73 49t-86 17Zm273-265 114-113q23-23 35.5-53.5T780-615q0-69-48-117t-117-48q-33 0-63.5 12.5T498-732L385-618l233 233ZM345-180q32 0 63-12.5t54-35.5l113-114-233-233-114 113q-23 23-35.5 53.5T180-345q0 69 48 117t117 48Z"/></svg>            
                    // <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="50px"  className="btn"  onClick={toggleMenu}><path d="M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 40-35.5 63T677-154q-21.67 0-41.5-9.33-19.83-9.34-33.5-28.67L495-348q-2-3.33-6.5-5.17Q484-355 479-355q-2.67 0-16 9L359-195q-14 20.67-34.83 30.83Q303.33-154 281-154q-36 0-66-23.17-30-23.16-35-63.83l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845q20 11 42.5 20.5T480-815q36 0 58.5-9.5T581-845q20-11 42-20.5t57-9.5Zm0 66.67q-23 0-40.17 7.83-17.16 7.83-36.16 18.83-28.34 15.67-56 24.5-27.67 8.84-67.67 8.84t-67.33-8.84Q385.33-766 357-781.67q-19-11-36.5-18.83-17.5-7.83-40.5-7.83-39 0-66.17 27.16Q186.67-754 186.67-715q0 8 1 23.67 1 15.66 4 36.33l55 404.33q1.66 14 12 21.5 10.33 7.5 22.33 7.5 7.67 0 14.33-3.66 6.67-3.67 11.34-10.34l101-148q12.66-18 32-28 19.33-10 40.33-10t40 10q19 10 31.67 28l103 151q4 6.34 10.33 9.17t13 2.83q12 0 22.5-7.83t12.17-20.5l55.66-406q3-20.67 4-36.33 1-15.67 1-23.67 0-39-27.16-66.17Q719-808.33 680-808.33ZM480-515Z"/></svg>
                    <RiMenu3Fill className='btn' onClick={toggleMenu} />
                }
    </div></>
)
}
export default Navbar