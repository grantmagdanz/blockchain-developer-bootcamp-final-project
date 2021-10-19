import { Box, Button, Text, Flex } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core';
import { NextPage } from "next";
import { useWBTCContract } from '../contracts/wbtc/contract';
import { useState, useEffect } from 'react';

const WBTCFaucet: NextPage = () => {
    const { active, account, library } = useWeb3React()  
    const { contract } = useWBTCContract()
    const [ balance, setBalance ] = useState('?')

    const getBalance = async () => {
      if (!active) {
        return
      }
      setBalance(await contract.balanceOf(account))
    }

    useEffect(() => {
      getBalance()
    }, [active])

    const onClick = async () => {
      const tx = await contract.mint(account, 10)
      tx.wait().then(() => getBalance())
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
        {account ? (
          <>
          <Text mt="4" fontSize="lg">{`${balance ?? '?'} WBTC in account ${account}`}</Text>
          <Button onClick={onClick}>Mint WBTC</Button>
          </>
        ) : "Please connect a wallet"}

      </Box>
    </Flex>
    )
}
  
  export default WBTCFaucet;