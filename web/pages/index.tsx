import type { NextPage } from 'next'
import Header from "../components/Header"
import Footer from "../components/Footer"
import React from 'react'
import MintButton from "../components/MintButton"

const Home: NextPage = () => {
  return (
     <>
      <Header />
      <MintButton/>
      {/* <Footer /> */}
     </>
  )
}

export default Home
