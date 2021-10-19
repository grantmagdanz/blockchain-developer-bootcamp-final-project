import { useWeb3React } from "@web3-react/core"
import { Text } from "@chakra-ui/react"
import ConnectedWalletButton from "./ConnectedWalletButton"
import ConnectWalletButton from "./ConnectWalletButton"

export default function WalletButton() {
  const { active, account, error } = useWeb3React()

  if (error) {
    console.log(error)
    return <Text color="red" fontSize="md" fontWeight="bold">ERROR</Text>
  } else if (!active) {
    console.log("Displaying ConnectedWalletButton without an account")
  }

  return account ? <ConnectedWalletButton/> : <ConnectWalletButton size="md" colorScheme="blue" fontSize="sm" fontWeight="bold" />
}
