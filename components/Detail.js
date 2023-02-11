import React, {useEffect , useState} from 'react';
import meta from "../public/meta.png"

function Card (props){
    const [detail , setDetail] = useState(props.movieDetail);

    useEffect(()=>{
        setDetail(props.movieDetail)

    },[props.movieDetail])

    return  (
        <div className=" content-center text-amber-50   p-8  m-4 bg-[#363636] h-[450] overflow-hidden h-auto rounded shadow  sm:inline-flex  inline-block">

            <img src={detail.Poster}/>
            <div className="flex-row m-4 ">

                <h1 className=" text-2xl m-3"> {detail.Title}  ({detail.Year})</h1>
                <span className="bg-amber-400 rounded p-1 m-3 hover:bg-amber-300 duration-150">{props.movieDetail.imdbRating} </span>
                <span className="bg-red-500 rounded p-1 hover:bg-red-400 duration-150">{props.movieDetail.Rated}</span>
                <span className="bg-red-500 rounded p-1 m-3 hover:bg-red-400 duration-150">%{props.movieDetail.Metascore}</span>
                <h3 className="mt-4">Runtime: {detail.Runtime}</h3>
                <h3>Director : {detail.Director}</h3>
                <h3>Genre: {detail.Genre}</h3>
                <h3>Actors: {detail.Actors}</h3>

            </div>
        </div>

    );
}

export default Card;