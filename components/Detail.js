import React, {useEffect , useState} from 'react';
import meta from "../public/meta.png"

function Card (props){
    const [detail , setDetail] = useState([]);

    return  (
        <div className=" content-center   p-8  m-4 bg-blue-500 h-[450] overflow-hidden h-auto rounded shadow  sm:inline-flex  inline-block">

            <img src={props.movieDetail.Poster}/>
            <div className="flex-row m-4 ">
                <h1 className=" text-2xl m-3"> {props.movieDetail.Title}  {props.movieDetail.Year}</h1>
                 <span className="bg-amber-400 rounded p-1 m-3 hover:bg-amber-100 duration-150">{props.movieDetail.imdbRating} </span>
                <span className="bg-red-500 rounded p-1 hover:bg-red-400 duration-150">{props.movieDetail.Rated}</span>
                <span className="bg-red-500 rounded p-1 m-3 hover:bg-red-400 duration-150">%{props.movieDetail.Metascore}</span>
                <h3 className="mt-4">Runtime: {props.movieDetail.Runtime}</h3>
                <h3>Director : {props.movieDetail.Director}</h3>
                <h3>Genre: {props.movieDetail.Genre}</h3>
                <h3>Actors: {props.movieDetail.Actors}</h3>

            </div>
        </div>

    );
}

export default Card;