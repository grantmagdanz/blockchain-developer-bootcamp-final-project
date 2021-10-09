import { useWeb3React } from "@web3-react/core"
import { injected } from "./Connector"
import { Button, Box, Text } from "@chakra-ui/react"

export default function ConnectWalletButton() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function handleConnect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  return account ? (
    <Box>
      {/* <Box px="3">
        <Text color="white" fontSize="md">
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
      </Box> */}
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'pink.400'}
        href={'#'}
        _hover={{
        bg: 'pink.300',
        }}
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
      </Button>
    </Box>
  ) : (
    <Button 
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'pink.400'}
        href={'#'}
        _hover={{
            bg: 'pink.400'
        }}
        onClick={handleConnect}>
            Connect to a wallet
    </Button>
  );
}
