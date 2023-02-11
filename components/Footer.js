import React from "react";

import Link from "next/link";
import {FaTelegram} from "@react-icons/all-files/fa/FaTelegram";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";


function Footer(props) {
    return (
        <div>
        <div className="bg-gray-800 border-x-amber-700 p-16 w-full left-0">
            <div className=" flex justify-end ">
                <Link href="#"> <SideBatIcon icon={<FaTelegram className="text-cyan-600 hover:text-cyan-700" size="30"/>} /> </Link>
                <Link href="#"> <SideBatIcon icon={<FaInstagram className="text-pink-600 hover:text-pink-700" size="30"/>} /> </Link>
                <Link href="#"> <SideBatIcon icon={<FaGithub className="text-zinc-900 hover:text-black" size="30"/>} /> </Link>
            </div>

        </div>
            <div>
                <h4 className="text-center bg-stone-900 text-neutral-600">copy right by movie10</h4>
            </div>
        </div>

    );
}
const SideBatIcon = ({icon})=>(
    <div className="pl-1">
        {icon}
    </div>
)


export default Footer;
