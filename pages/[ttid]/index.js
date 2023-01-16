import { useRouter } from 'next/router'
import {useState} from "react"
import Detail from "../../components/Detail";

const Post = () => {
    const router = useRouter()
    const { ttid } = router.query
    const [movie , setMovie] = useState([]);
    const [fe , setFe] = useState(0);

    const options = {
        method: 'GET'
    };


    async function fMovie() {
        await fetch('https://www.omdbapi.com/?i=' + ttid+"&apikey=221cf49a",options)
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

    return( <>
            <div className="items-center">
                ssd: {movie.Title}
                <Detail
                    movieDetail={movie}
                />
                <img src={movie.Poster}/>
            </div>
    </>
    )
}

export default Post;