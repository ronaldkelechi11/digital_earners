import { useState } from 'react'
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }

    return (
        <div className='h-1/3 p-2 flex sticky top-0 bg-white flex-wrap items-center justify-between'>
            <NavLink reloadDocument className="text-white w-[50px] h-[50px]"><img src="/src/assets/logo.JPG" alt="" /></NavLink>
            <div className="hidden md:flex flex-row gap-5 text-primary">
                <NavLinks />
            </div>
            <div className="md:hidden p-2 transition-all cursor-pointer text-primary" onClick={toggleNav}>{isOpen ? <FaX /> : <AiOutlineMenu color='currentColor' />}</div>
            {isOpen &&
                <>
                    <div className="text-primary basis-full">
                        <NavLinks />
                    </div>
                </>
            }
        </div>
    )
}

function NavLinks() {
    const navbarStyling = "hover:scale-[1.1] font-poppins text-[16px] hover:text-secondary transition-all"
    return (
        <div className='text-xl font- text-primary flex flex-col md:flex-row gap-3 items-center'>
            <NavLink className={navbarStyling} to={"/"}>Home</NavLink>
            <NavLink className={navbarStyling} to={"/pricing"}>Pricing</NavLink>
            <NavLink className={navbarStyling} to={"/team"}>Team</NavLink>
            <NavLink className={navbarStyling} to={"/contact"}>Contact</NavLink>
        </div>
    )
}


export default Navbar
