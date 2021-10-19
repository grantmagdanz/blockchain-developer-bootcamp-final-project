import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import MintButton from './MintButton'
import ConnectWalletButton from '../wallet/ConnectWalletButton'
import { useWeb3React } from "@web3-react/core"
import { useWBTCContract } from "../../contracts/wbtc/contract"

const Minting = () => {
  const { active } = useWeb3React()
  const wbtc = useWBTCContract()

  console.log(wbtc)

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
          No crypto story is complete without Bitcoin.
        </Text>
        { active ? <MintButton mt="8" as="a" size="lg" colorScheme="blue" fontWeight="bold"/> : <ConnectWalletButton text="Connect wallet" mt="8" as="a" size="lg" colorScheme="blue" fontWeight="bold" />}
      </Box>
    </Flex>
  )
}

export default Minting;