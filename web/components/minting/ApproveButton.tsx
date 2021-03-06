import { Button } from "@chakra-ui/react"
import { useWeb3React } from "@web3-react/core"
import { useWBTCContract } from '../../contracts/wbtc/contract';
import { CONTRACT_ADDRESS } from '../../contracts/glass/contract'
import { WBTC_MINT_AMOUNT } from '../../constants'

export default function ApproveButton(props: any) {
    const { active, contract } = useWBTCContract()

    const onClick = async () => {
        if (!active) {
            alert("connect wallet")
            return
        }
        const tx = await contract.approve(CONTRACT_ADDRESS, WBTC_MINT_AMOUNT)
        tx.wait().then(() => { props.onClick() })
    }


    return (
        <Button {...props} onClick={onClick}>Approve wBTC spending</Button>
    )
}