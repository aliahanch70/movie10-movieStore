import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {MoviesList} from "../../../Data_movie";
import Link from "next/link";
import Card from "../../../components/Card";

export default () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 0;
    return (
        <div className="carousel w-full rounded-box">


            {MoviesList.slice(1,6).map((movies, index)=>(
                <Link className="carousel-item " key={index} href={"/d/"+movies.imdb}>
                    <Card
                        img={movies.img}
                        imdb={movies.imdb}
                    />
                </Link>
            ))}

            <div>
                more
            </div>
        </div>
    );
};