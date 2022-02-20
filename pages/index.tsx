import type { NextPage } from 'next'
import CarForm from '../lib/CarForm'
import SearchForm from '../lib/SearchForm'

const Home: NextPage = () => {
  return (
    <div className='overflow-hidden grid place-items-center mt-8'>
      <h1 className='text-5xl mb-10'>Simple Search Using Redis OM</h1>
      <div className='grid grid-cols-2 gap-14'>
      <CarForm />
      <SearchForm />
      </div>
    </div>
  )
}

export default Home
