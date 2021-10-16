import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import MintButton from './MintButton'

const Minting = () => {
  return (
    <Flex 
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      h="full"
      mb={8}
      p={8}
    >
      <Box
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
          Bitcoin for the gallery
        </Heading>
        <Text mt="4" fontSize="lg">
          No crypto story is complete without Bitcion.
        </Text>
        <MintButton />
      </Box>
    </Flex>
  )
}

export default Minting;