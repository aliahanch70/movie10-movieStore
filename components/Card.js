import {useEffect, useState} from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Post from "@/pages/d/[ttid]";

function Card (props){
    const [movie , setMovie] = useState([]);

    const options = {
        method: 'GET'
    };

    useEffect(()=>{
        fetch('https://www.omdbapi.com/?i=' + props.imdb+"&apikey=221cf49a",options)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setMovie(res);

            })
            .catch(err => console.error(err));

    },[props])
    
    // async function fMovie() {
    //     await fetch('https://www.omdbapi.com/?i=' + props.imdb+"&apikey=221cf49a",options)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //             setMovie(response);
    //
    //         })
    //         .catch(err => console.error(err));
    // }
    // if(fe === 0){ fMovie()
    //     setFe(1);
    // }
    
    return  (
            <div className="w-[170px] sm:w-[250px] sm:m-3 m-2 bg-[#363636] h-[450] overflow-hidden h-auto rounded shadow">
                <div className="center items-center">
                    <img className="overflow-hidden w-100 h-[450]" src={movie.Poster}/>
                    <div className="flex items-center justify-between p-3 rounded">
                        <h3 className="sm:font-medium font-normal font-sans  text-amber-50">{movie.Title}</h3>
                        <h3 className="text-amber-300 m-0 ">{movie.imdbRating}</h3>
                    </div>
                </div>
            </div>
);
}

// export async function getStaticPaths(ctx) {
//     return {
//         paths: [{ params: {...[ctx.query.ttid]} }],
//         fallback: false, // can also be true or 'blocking'
//     }
// }



export default Card;