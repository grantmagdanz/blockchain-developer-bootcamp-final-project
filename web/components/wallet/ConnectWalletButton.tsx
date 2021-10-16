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
  ) : (
    <Button size="md" colorScheme="blue" fontSize="sm" fontWeight="bold" onClick={handleConnect}>
          Connect to a wallet
    </Button>
  );
}
