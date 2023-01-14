import Head from 'next/head'
import Navbar from '../components/Navbar'
import {MoviesList} from '../Data_movie'
import Card from '../components/Card'

export default function Home() {
  return (
      <>
          <Navbar/>
          <div className="flex flex-wrap">
              {MoviesList.map((movies)=>(
                  <div className=" ">
                      <Card
                          key={movies.id}
                          img={movies.img}
                          imdb={movies.imdb}
                      />
                  </div>
              ))}
          </div>

      </>
  )
}
