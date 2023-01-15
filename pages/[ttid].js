import { useRouter } from 'next/router'
import {useState} from "react"

const Post = () => {
    const router = useRouter()
    const { ttid } = router.query
    const [movie , setMovie] = useState([]);
    const [fe , setFe] = useState(0);

    const options = {
        method: 'GET'
    };


    async function fMovie() {
        await fetch('http://www.omdbapi.com/?i=' + ttid+"&apikey=221cf49a",options)
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

    return <p>movie: {movie.Title}</p>
}

export default Post