import Head from 'next/head'
import Navbar from '../components/Navbar'
import {MoviesList} from '../Data_movie'
import Card from '../components/Card'
import { useRouter} from "next/router";
import Link from "next/link";

export default function Home() {


  return (
      <>
          <Navbar/>
          <div className="flex flex-wrap justify-center">
              {MoviesList.map((movies, index)=>(
                  <Link className=" " key={index} href={movies.imdb}>
                      <Card
                          img={movies.img}
                          imdb={movies.imdb}
                      />
                  </Link>
              ))}
          </div>

      </>
  )
}
