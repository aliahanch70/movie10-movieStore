import {MoviesList} from '../../../Data_movie'
import Card from '../../../components/Card'
import Link from "next/link";
import {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import Navbar from "../../../components/Navbar";
import Pages from "./Pages";
import Post from "../../d/[ttid]";
import NewPage from "./NewPage";

import Skeleton from '@mui/material/Skeleton';



export default function Page(props) {
    const item=0;
    const router = useRouter()
    const { pid } = router.query;
    const pid2=Number(pid);
    const i=pid2*12;
    const ii=i-12;
    const numberSeries = MoviesList.filter(movies=>
        movies.Type==="series"
    )
    const filterMovie2 = MoviesList.filter(movies=>
        movies.Type==="series"
    ).slice(ii,i);
    const [filter,setFilter] = useState([]);

    useEffect(()=>{
        setFilter(filterMovie2);
    },[pid])

    return (
        <>
            <Navbar/>
            <div className="flex flex-wrap justify-center">
                {filter.map((movies, index)=> {
                   return <Link className=" " key={movies.id} href={"/d/" + movies.imdb}>
                        <Card
                            img={movies.img}
                            imdb={movies.imdb}
                        />


                   </Link>
                })}

            </div>



            <div className=" m-3 p-1 text-amber-50">
                <Pages
                    pageId={pid}
                    movieNumber={numberSeries}
                />


                <NewPage/>
            </div>

        </>
    )
}

// export async function getServerSideProps(x) {
//     const options = {
//         method: 'GET'
//     };
//
//     const { ttid } = x.query
//     const res = await fetch('https://www.omdbapi.com/?i=' + ttid+"&apikey=221cf49a",options)
//     const data = await res.json()
//     console.log("1")
//
//     return { props: { data } }
// }

