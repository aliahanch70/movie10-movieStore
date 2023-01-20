import { useRouter } from 'next/router'
import {useState} from "react"
import Detail from "../../components/Detail";
import Navbar from "../../components/Navbar";

const Post = ({data}) => {
    const router = useRouter()
    const { ttid } = router.query
    const [movie , setMovie] = useState([]);
    const [fe , setFe] = useState(0);

    const options = {
        method: 'GET'
    };


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
    if(fe === 0){
        // fMovie()
        setMovie(data)
        setFe(1)
    }
    console.log(data);
    return( <>
            <Navbar/>
            <div className="items-center flex flex-col sm:flex">

                <Detail
                    movieDetail={movie}
                />

            </div>
    </>
    )
}

export async function getServerSideProps(x) {
    const options = {
        method: 'GET'
    };

    const { ttid } = x.query
    // Fetch data from external API
    const res = await fetch('https://www.omdbapi.com/?i=' + ttid+"&apikey=221cf49a",options)
    const data = await res.json()
    console.log("1")

    // Pass data to the page via props
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