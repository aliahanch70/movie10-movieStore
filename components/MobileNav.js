import React from 'react';
import { BiMoviePlay } from "react-icons/bi";
import {HiOutlineHome} from "@react-icons/all-files/hi/HiOutlineHome";


import { TbMovie } from "react-icons/tb";

import {RiMenuUnfoldLine} from "@react-icons/all-files/ri/RiMenuUnfoldLine";



function MobileNav(props) {
    return (
        <div className="flex ">
            <div className=" fixed top-0 right-0 h-screen
            w-16 m-0 flex flex-col bg-gray-800 text-white shadow mt-[70px]">




                <SideBatIcon icon={<RiMenuUnfoldLine size="50"/>} />
                <SideBatIcon icon={<BiMoviePlay size="50"/>} />
                <SideBatIcon icon={<TbMovie size="50"/>} />
                <SideBatIcon icon={<HiOutlineHome size="50"/>} />
            </div>
        </div>
    );
}

const SideBatIcon = ({icon})=>(
    <div className="sidebar-icon">
        {icon}
    </div>
)

export default MobileNav;