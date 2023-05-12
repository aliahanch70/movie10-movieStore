import Navbar from '../components/Navbar'
import {MoviesList} from '@/Data_movie'
import Card from '../components/Card'
import Link from "next/link";
import Footer from '../components/Footer'
import React from "react";


export default function Home() {


  return (
      <>
          <Navbar/>
          {/*<h2 className="left-0 text-2xl ml-3 mt-3">New Movies</h2>*/}
          <div className="flex justify-between">
              <h2 className="right-0 float-right text-2xl ml-3 mt-3">New Movies</h2>
              {/*<Link href={"/f/"} className="left-0 text-2xl ml-3 mt-3 text-red-700">More</Link>*/}
              {/*<Link href={"/1"} className="left-0 text-2xl ml-3 mt-3 text-red-700">More</Link>*/}
              <Link href={"/"+1} className="left-0 text-2xl ml-3 mt-3 text-red-700">More</Link>
          </div>
          <div className="flex flex-wrap justify-center">

              <div className="carousel scroll-smooth w-full rounded-box">


                  {MoviesList.filter(x=>x.Type==="movie").slice(1,8).map((movies, index)=>(
                      <Link className="carousel-item " key={index} href={"/d/"+movies.imdb}>
                          <Card
                              img={movies.img}
                              imdb={movies.imdb}
                          />
                      </Link>
                  ))}


              </div>
          </div>
          <Footer/>

      </>
  )
}
