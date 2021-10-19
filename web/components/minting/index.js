import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import MintButton from './MintButton'
import ConnectWalletButton from '../wallet/ConnectWalletButton'
import { useWeb3React } from "@web3-react/core"
import { useWBTCContract } from "../../contracts/wbtc/contract"
import ApproveButton from './ApproveButton'
import { useState, useEffect } from 'react'
import { CONTRACT_ADDRESS } from '../../contracts/glass/contract'
import { WBTC_MINT_AMOUNT } from '../../constants'

const Minting = () => {
  const { active, account } = useWeb3React()
  const { contract } = useWBTCContract()
  const [ buttonState, setButtonState ] = useState(active ? 'APPROVE_SPENDING' : 'CONNECT_WALLET') 

  const updateButtonState = async () => {
    if (!active) {
      setButtonState('CONNECT_WALLET')
      return
    }
    const allowance = await contract.allowance(account, CONTRACT_ADDRESS)
    console.log(`allowance: ${allowance}`)
    if (allowance < WBTC_MINT_AMOUNT) {
      setButtonState('APPROVE_SPENDING')
    } else {
      setButtonState('MINT')
    }
  }
  
  useEffect(() => {
    updateButtonState()
  }, [active])

  const getButton = () => {
    const buttonProps = {
      mt: "8",
      as: "a",
      size: "lg",
      colorScheme: "blue",
      fontWeight: "bold"
    }
    switch (buttonState) {
      case 'CONNECT_WALLET':
        return <ConnectWalletButton text="Connect wallet" {...buttonProps} />
      case 'APPROVE_SPENDING':
        return <ApproveButton onClick={updateButtonState} {...buttonProps} />
      case 'MINT':
        return <MintButton {...buttonProps} />
      default:
        return <Text color="red" fontSize="md" fontWeight="bold">ERROR</Text>
        console.log(`BAD BUTTON STATE ${buttonState}`)
    }
  }

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
        { getButton() }
      </Box>
    </Flex>
  )
}

export default Minting;