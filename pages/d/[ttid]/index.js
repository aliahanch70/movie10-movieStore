import { useRouter } from 'next/router'
import {useEffect, useState} from "react"
import Navbar from "../../../components/Navbar";
import Detail from "../../../components/Detail";
import Search from "../../../components/Search";
import React from "react";
import SearchUi from "../../../components/SearchUi";
import MyTabs from "../../../components/MyTabs";




const Post = ({data}) => {
    const router = useRouter()
    const { ttid } = router.query
    const [movie , setMovie] = useState([]);
    const [fe , setFe] = useState(0);

    useEffect(()=>{
        setMovie(data)
    },[ttid])


    // async function fMovie() {
    //     await fetch('https://www.omdbapi.com/?i=' + ttid+"&apikey=221cf49a",options)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //             setMovie(response)
    //
    //         })
    //         .catch(err => console.error(err));
    // }

    console.log(fe);
    return( <>
            <Navbar/>
            <Search/>
            <MyTabs/>

            <div className="items-center flex flex-col sm:flex">

                <Detail
                    movieDetail={movie}
                />

            </div>
    </>
    )
}

export async function getServerSideProps({params , res }) {
    const options = {
        method: 'GET'
    };
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    const { ttid } = params
    // Fetch data from external API
    const req = await fetch('https://www.omdbapi.com/?i=' + ttid+"&apikey=221cf49a",options)
    const data = await req.json()
    console.log("1")

    // Pass data to the page vcia props
    return { props: { data } }
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

export default Post;