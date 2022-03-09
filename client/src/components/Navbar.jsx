import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/Ai';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

const NavbarItem = ({title, classprops}) =>{
    return(
        <li className={`mx-6 cursor-pointer divide-solid hover:border-b-2 hover:border-amber-300 hover:text-amber-300 duration-100  ${classprops}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const closeMenu = () => setClick(false);

    return(
        <nav className='w-full flex md:justify-evenly justify-between items-center p-4 fixed'>
            <div className='w-flex-initial justify-center items-center'>
                <h1 className='text-center cursor-pointer text-white text-3xl font-black text-amber-300 hover:animate-pulse duration-200 transition ease-in-out' onClick={()=>scroll.scrollToTop()}>
                    NFTravel
                </h1>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial '>
                <Link to="nfts" spy={true} smooth={true} offset={50} duration={1000}><li class="mx-6 cursor-pointer divide-solid hover:border-b-2 hover:border-amber-300 hover:text-amber-300 duration-100  undefined">Showroom</li></Link>
                <Link to="tours" spy={true} smooth={true} offset={50} duration={1000}><li class="mx-6 cursor-pointer divide-solid hover:border-b-2 hover:border-amber-300 hover:text-amber-300 duration-100  undefined">Tours</li></Link>
                <Link to="roadmap" spy={true} smooth={true} offset={50} duration={1000}><li class="mx-6 cursor-pointer divide-solid hover:border-b-2 hover:border-amber-300 hover:text-amber-300 duration-100  undefined">Roadmap</li></Link>
            </ul>
            <button className='text-white md:flex hidden flex-row justify-between items-center flex-initial py-2 px-7 rounded-full cursor-pointer bg-gradient-to-r from-amber-200 to-amber-500 hover:from-amber-500 hover:to-amber-200 hover:animate-pulse transition ease-in-out'>
                Connect Wallet
            </button>
            <div className='flex absolute top-6 right-6'>
                {toggleMenu
                    ? <AiOutlineClose fontSize={20} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
                    : <HiMenuAlt4 fontSize={20} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in  animation-200 
                        "
                    >
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={()=> setToggleMenu(false)}/> 
                        </li>
                        <Link to="nfts" spy={true} smooth={true} offset={50} duration={1000} onClick={() => setToggleMenu(false)} ><li class="my-2 text-lg mx-2 cursor-pointer divide-solid hover:border-b-2 hover:border-amber-300 hover:text-amber-300 duration-100  undefined">Showroom</li></Link>
                        <Link to="tours" spy={true} smooth={true} offset={50} duration={1000}  onClick={() => setToggleMenu(false)}><li class="my-2 text-lg mx-2 cursor-pointer divide-solid hover:border-b-2 hover:border-amber-300 hover:text-amber-300 duration-100  undefined">Tours</li></Link>
                        <Link to="roadmap" spy={true} smooth={true} offset={50} duration={1000}  onClick={() => setToggleMenu(false)}><li class="my-2 text-lg mx-2 cursor-pointer divide-solid hover:border-b-2 hover:border-amber-300 hover:text-amber-300 duration-100  undefined">Roadmap</li></Link>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar;