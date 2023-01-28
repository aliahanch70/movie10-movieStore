import {MoviesList} from '../../../Data_movie'
import Card from '../../../components/Card'
import Link from "next/link";
import {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import Navbar from "../../../components/Navbar";
import Pages from "./Pages";
import Post from "../../[ttid]";

export default function Page(props) {

    const router = useRouter()
    const { pid } = router.query;
    const pid2=Number(pid);
    const i=pid2*12;
    console.log(pid2)
    const ii=i-12;
    const [ss,setSs] = useState(0);
    const filterMovie2 = MoviesList.filter(movies=>
        movies.Type==="series"
    ).slice(ii,i);
    console.log(filterMovie2)
    const [filter,setFilter] = useState([]);

    // if(ss===0){
    //     setFilter(filterMovie2);
    //     setSs(1);
    // }
    useEffect(()=>{
        setFilter(filterMovie2);
    },[pid])

    // const filterMovie2 = MoviesList.filter(movies=>
    //     movies.Type==="series"
    // ).slice(ii,i);

    console.log(filter)

    return (
        <>
            <Navbar/>
            <div className="flex flex-wrap justify-center">
                {filter.map((movies, index)=> {

                   return <Link className=" " key={index} href={"/" + movies.imdb}>
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
                    movieNumber={filterMovie2}

                />
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

