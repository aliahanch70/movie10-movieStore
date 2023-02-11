import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const Pages = (props) => {
    const router = useRouter()
    const { Hid } = router.query;
    const pid2=Number(Hid);
    let pageP2;
    let pageP3;
    let pageP4
    if(props.movieNumber/12 >= pid2){
        pageP2=<Link href={"/" + (pid2+1)}><p  className=" bg-red-500 p-3 rounded shadow hover:bg-red-600">{pid2+1}</p></Link>
    }
    if(props.movieNumber/12 >= pid2+1){
        pageP3=<Link href={"/" + (pid2+2)}><p className="bg-red-500 p-3 rounded shadow hover:bg-red-600">{pid2+2}</p></Link>
    }
    if( pid2!==1 ){
        pageP4=<Link href={"/" + (pid2-1)}><p className="bg-red-500 p-3 rounded shadow hover:bg-red-600">{pid2-1}</p></Link>
    }

    return (
        <div className=" p-2 flex overflow-hidden justify-evenly ">

            {pageP4}

            <Link href={"/" + pid2}><p className="bg-red-500 p-3 rounded shadow hover:bg-red-600">{pid2}</p></Link>

            {pageP2}

            {pageP3}




        </div>
    );

};

export default Pages;