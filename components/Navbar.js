import React ,  {useState} from 'react';
import Card from "@/components/Card";
import MobileNav from "@/components/MobileNav";
import {RiMenuFoldLine} from "@react-icons/all-files/ri/RiMenuFoldLine";

function Navbar(props) {
    const [nav , setNav] = useState(false);
    if(nav){
        console.log("sad");
    };
    const ex= nav ? <MobileNav/> : <></>;
    return (
        <nav className="z-40 p-5 bg-[#4C1D95]  shadow md:flex md:items-center md:justify-between">
            <div>
                    <span className="text-2xl text-[#0EA5E9]">
                        Movie 10
                    </span>
            </div>

            <ul className=" right-0 md:flex md:items-center md:opacity-100 opacity-0 md:w-auto md:py-0 py-4 absolute md:pl-0 pl-7">
                <li className="mx-4 my-6 md:my-0 ">
                    <a href="#" className="text-xl text-[#0EA5E9] hover:text-cyan-300 duration-500">Home</a>
                </li >
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-xl text-[#0EA5E9] hover:text-cyan-300 duration-500">Serials</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-xl text-[#0EA5E9] hover:text-cyan-300 duration-500">Movies</a>
                </li>

            </ul>
            <div className="duration-75 right-0 flex items-center md:opacity-0 w-auto top-0 p 6 absolute m-4">
                <ul>
                    <li className="duration-75  my-0" onClick={()=>setNav(!nav)}><RiMenuFoldLine size="50"/></li>
                </ul>
            </div>
            <div className="">
                {ex}
            </div>
        </nav>

    );
}

export default Navbar;

