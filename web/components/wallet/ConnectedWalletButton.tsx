import { useWeb3React } from "@web3-react/core"
import { Button, Box, Text } from "@chakra-ui/react"

export default function ConnectedWalletButton(props: any) {
  const { account } = useWeb3React()

  return ( 
    <Box>
      <Button size="md" colorScheme="blue" fontSize="sm" fontWeight="bold">
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
      </Button>
    </Box>
  ) 
}
