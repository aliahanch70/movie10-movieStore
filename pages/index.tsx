import Head from 'next/head'
import Navbar from '../components/Navbar'
import {MoviesList} from '../Data_movie'
import Card from '../components/Card'

export default function Home() {
  return (
      <>
          <Navbar/>
          {MoviesList.map((movies)=>(
              <Card
                  key={movies.id}
                  img={movies.img}
                  imdb={movies.imdb}
              />
          ))}

      </>
  )
}
