import { Box, Button, Text, Flex } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core';
import { NextPage } from "next";
import { useWBTCContract } from '../contracts/wbtc/contract';
import { useState, useEffect } from 'react';
import { CONTRACT_ADDRESS } from '../contracts/glass/contract';

const WBTCFaucet: NextPage = () => {
    const { active, account, library } = useWeb3React()  
    const { contract } = useWBTCContract()
    const [ balance, setBalance ] = useState('?')
    const [ allowance, setAllowance ] = useState('?')

    const getBalance = async () => {
      if (!active) {
        return
      }
      setBalance(await contract.balanceOf(account))
    }

    const getAllowance = async () => {
      if (!active) {
        return
      }
      const currentAllowance = await contract.allowance(account, CONTRACT_ADDRESS)
      setAllowance(currentAllowance / 10 ** 8)
    }

    useEffect(() => {
      getBalance()
      getAllowance()
    }, [active])

    const onMintClick = async () => {
      const tx = await contract.mint(account, 10)
      tx.wait().then(() => getBalance())
    }

    const onResetClick = async () => {
      await contract.approve(CONTRACT_ADDRESS, 0)
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
          <Text mt="4" fontSize="lg">{`${balance} wBTC in account ${account}`}</Text>
          <Text mt="4" fontSize="lg">{`${allowance} approved for spending`}</Text>
          <br />
          <Button colorScheme="pink" onClick={onMintClick}>Mint wBTC</Button>
          <br />
          <br />
          <Button colorScheme="pink" onClick={onResetClick}>Reset Approval</Button>
          </>
        ) : "Please connect a wallet"}

      </Box>
    </Flex>
    )
}
  
  export default WBTCFaucet;