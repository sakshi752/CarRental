import React from 'react'
import Helmet from '../Components/Helmet'
import CarsList from '../Components/Cars/CarsList'

const Cars = () => {
  return (
    <>
      <Helmet title={"Car Models"} />
      <CarsList/>
    </>
  )
}

export default Cars
