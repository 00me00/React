import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Card } from '../component'

const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams()
  const quaryTerm=searchParams.get("q")
 // console.log(quaryTerm)
 const {movies}=useFetch(apiPath,quaryTerm)
 console.log(movies)
  return (
    <main className='mx-auto'>
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {
      movies && movies.map((m)=>(
          <Card key={m.id} movie={m}/>
        ))
      }
    
    </div>
   </main>
  )
}

export default Search