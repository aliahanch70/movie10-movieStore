import React, {useEffect , useState} from 'react';

function Card (props){
    const [detail , setDetail] = useState([]);


    // const options = {
    //     method: 'GET'
    // };


    // async function fMovie() {
    //     await fetch('https://www.omdbapi.com/?i=' + props.imdb+"&apikey=221cf49a",options)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //             setMovie(response)
    //
    //         })
    //         .catch(err => console.error(err));
    // }
    // if(fe === 0){ fMovie()
    //     setFe(1)
    // }
    return  (
        <div className="flex  w-[250px] m-4 bg-blue-800 h-[450] overflow-hidden h-auto rounded shadow">
            {props.movieDetail.Title}
        </div>

    );
}

export default Card;