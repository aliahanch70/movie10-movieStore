import React from 'react';
import { BiMoviePlay } from "react-icons/bi";
import {HiOutlineHome} from "@react-icons/all-files/hi/HiOutlineHome";





function MobileNav(props) {
    return (
        <div className="flex z-0">
            <div className=" fixed top-0 right-0 h-screen
            w-16 m-0 flex flex-col bg-gray-800 text-white shadow">


                <i className="mt-10"><HiOutlineHome size="50"/>Home</i>
                <i><BiMoviePlay size="50"/>Movies </i>
                <i>C</i>
                <i>D</i>
                <i>E</i>

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