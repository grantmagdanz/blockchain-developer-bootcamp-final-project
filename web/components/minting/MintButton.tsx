import { Button } from "@chakra-ui/react"
import { useWeb3React } from "@web3-react/core"
import { ethers } from 'ethers';
import { useGlassContract } from '../../glass_contract/contract'

export default function MintButton(props: any) {
    const { active, contract } = useGlassContract()
    const { account } = useWeb3React()

    const onClick = async () => {
        if (!active) {
            alert("connect wallet")
            return
        }
        await contract.publicMint()
        const count = await contract.balanceOf(account)
        console.log(`${account} now owns ${count} NFTs`)
    }


    return (
        <Button {...props} onClick={onClick}>Mint</Button>
    )
}