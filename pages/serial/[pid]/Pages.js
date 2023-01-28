import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const Pages = (props) => {
    const router = useRouter()
    const { pid } = router.query;
    const pid2=Number(pid);
    let pageP2;
    let pageP3;

    if(props.movieNumber.length/12 >= pid2){
        pageP2=<Link href={"/serial/" + (pid2+1)}><p>{pid2+1}</p></Link>
    }
    if(props.movieNumber/12 >= pid+1){
        pageP3=<Link href={"/serial/" + (pid2+2)}><p>{pid2+2}</p></Link>
    }

    return (
        <div>

            <Link href={"/serial/" + pid2}><p>{pid2}</p></Link>
            {pageP2}{pageP3}
        </div>
    );

};

export default Pages;