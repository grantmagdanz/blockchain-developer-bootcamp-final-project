import {Box, Heading } from '@chakra-ui/react'


const ComingSoon = () => {
    return (
        <Box
            mx="auto"
            px={{ base: '6', lg: '8' }}
            py={{ base: '16', sm: '20' }}
            textAlign="center"
        >
            <Heading size="3xl" fontWeight="bold" letterSpacing="tight">
            Coming soon!
            </Heading>
        </Box>
    )
  }
  
  export default ComingSoon;