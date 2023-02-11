import {useEffect, useState} from "react";
import {MoviesList} from '../Data_movie'
import Card from "./Card";
import Link from "next/link";

function Search() {
    const movie= MoviesList.map(m=>m.imdb);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4154bdc818msh71e67d9b4357845p1101b2jsnad7c5c87f5de',
            'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
        }
    };


        const [message, setMessage] = useState('');
        const [search, setSearch] = useState([]);
        const [searchIn, setSearchIn] = useState([]);

        const [updated, setUpdated] = useState(message);

        const handleChange = (event) => {
            setMessage(event.target.value);
        };

        const handleClick = () => {
            // 👇 "message" stores input field value

            setUpdated(message);
            fetch('https://mdblist.p.rapidapi.com/?s=' + message+'&l=100', options)
                .then(response => response.json())
                .then(response => {
                    console.log(response.search.map(m=>m.id))
                    setSearch(response.search.map(m=>m.id))


                })
                .catch(err => console.error(err));
        };
    // function isCherries(fruit) {
    //     return fruit.id === search;
    // }
    //  const sea = search.filter(mx=>movie.indexOf(m=>m===mx))
        useEffect(()=>{
            const sea = movie.filter(mx=>search.find(m=>mx===m))
            setSearchIn(sea)
        },[search])

        // const searchIn=search.filter(mx=>movie.find(m=>m===mx));

    console.log(searchIn)

    return (
        <div>
            <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}
            />


                {searchIn.map((movies , index)=>(
                    <Link href={"/d/"+movies} key={index}>
                        <Card
                            imdb={movies}
                        />
                    </Link>
                ))}


            <button onClick={handleClick} className="bg-blue-800 pt-1" >Update</button>
        </div>
    );
}

export default Search;