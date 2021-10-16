import { Button } from "@chakra-ui/react"
import { useWeb3React } from "@web3-react/core"
import { ethers } from 'ethers';

export default function MintButton () {
    const { active, library } = useWeb3React()

    const onClick = async () => {
        if (!active) {
            alert("connect wallet")
            return
        }
        const balance = await library.getBalance("0xf77bFc50F56Fc2A0b751f8ED6801Df58D94a1Bf6")
        console.log(ethers.utils.formatEther(balance))
    }

    return (
        <Button mt="8" as="a" size="lg" colorScheme="blue" fontWeight="bold" onClick={onClick}>Mint</Button>
    )
}