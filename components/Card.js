import React, {useEffect , useState} from 'react';

function Card (props){
    const [movie , setMovie] = useState([]);
    const [imdb , setImdb] = useState([]);
    const [fe , setFe] = useState(0);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4154bdc818msh71e67d9b4357845p1101b2jsnad7c5c87f5de',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };


    async function fMovie() {
        await fetch('https://moviesdatabase.p.rapidapi.com/titles/' + props.imdb, options)
            .then(response => response.json())
            .then(response => {
                console.log(response.results);
                setMovie(response.results.titleText)
                setImdb(response.results)
            })
            .catch(err => console.error(err));
    }
    if(fe === 0){ fMovie()
        setFe(1)
    }
    return  (
            <div className="w-[250px] m-4 bg-blue-800 h-[450] overflow-hidden h-auto">
                <div className="center items-center">
                    <img className="overflow-hidden w-100 h-[450]" src={props.img}/>

                    <h3 className="font-sans">{movie.text}</h3>
                    {/*<h3>{imdb}</h3>*/}
                </div>
            </div>

);
}

export default Card;