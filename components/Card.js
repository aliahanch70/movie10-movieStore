import React, {useEffect , useState} from 'react';

function Card (props){
    const [movie , setMovie] = useState([]);
    const [fe , setFe] = useState(0);

    const options = {
        method: 'GET'
    };


    async function fMovie() {
        await fetch('https://www.omdbapi.com/?i=' + props.imdb+"&apikey=221cf49a",options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setMovie(response)

            })
            .catch(err => console.error(err));
    }
    if(fe === 0){ fMovie()
        setFe(1)
    }
    return  (
            <div className="w-[250px] m-4 bg-blue-800 h-[450] overflow-hidden h-auto rounded shadow">
                <div className="center items-center">
                    <img className="overflow-hidden w-100 h-[450]" src={movie.Poster}/>
                    <div className="flex items-center justify-between p-3 rounded">
                        <h3 className="font-medium font-sans  text-amber-50">{movie.Title}</h3>
                        <h3 className="text-amber-300 m-0 ">{movie.imdbRating}</h3>
                    </div>
                </div>
            </div>

);
}

export default Card;