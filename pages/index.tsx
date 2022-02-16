import type { NextPage } from 'next'
import CarForm from '../lib/CarForm'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Create a Car</h1>
      <CarForm />
    </div>
  )
}

export default Home
