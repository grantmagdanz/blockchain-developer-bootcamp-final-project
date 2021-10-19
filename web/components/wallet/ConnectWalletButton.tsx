import { useWeb3React } from "@web3-react/core"
import { injected } from "./Connector"
import { Button, Box, Text } from "@chakra-ui/react"
import ConnectedWalletButton from "./ConnectedWalletButton"

export default function ConnectWalletButton(props: any) {
  const { activate } = useWeb3React()

  async function handleConnect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <Button {...props} onClick={handleConnect}>
          {props.text ?? "Connect to a wallet"}
    </Button>
  )
}
