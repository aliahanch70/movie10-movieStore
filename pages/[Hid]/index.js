import { useRouter } from 'next/router'
import {useState} from "react"
import Navbar from "../../components/Navbar";
import Detail from "../../components/Detail";
import {MoviesList} from "../../Data_movie";
import {useEffect} from "react";
import Link from "next/link";
import Card from "../../components/Card";
import Pages from "../[Hid]/Pages";
import Search from "../../components/Search";


export default function Page(props) {

    const router = useRouter()
    const { Hid } = router.query;
    const pid2=Number(Hid);
    const i=pid2*12;
    const ii=i-12;
    const numberSeries = MoviesList.length;
    const filterMovie2 = MoviesList.slice(ii,i);
    const [filter,setFilter] = useState([]);
    console.log(numberSeries)
    useEffect(()=>{
        setFilter(filterMovie2);
    },[Hid])

    return (
        <>
            <Navbar/>
            <Search/>
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
                    pageId={Hid}
                    movieNumber={numberSeries}
                />

            </div>
        </>
    )
}



// export async function getStaticProps(x) {
//     // Call an external API endpoint to get posts
//     const options = {
//         method: 'GET'
//     };
//
//     const { ttid } = x.query
//     // Fetch data from external API
//     const res = await fetch('https://www.omdbapi.com/?i=' + ttid+"&apikey=221cf49a",options)
//     const data = await res.json()
//     console.log("1")
//
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             data,
//         },
//     }
// }

