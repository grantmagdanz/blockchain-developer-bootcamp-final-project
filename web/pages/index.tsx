import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import Mint from '../components/minting'

const Home: NextPage = () => {
  return (
     <Box >
        <Mint /> 
     </Box>
  )
}

export default Home
