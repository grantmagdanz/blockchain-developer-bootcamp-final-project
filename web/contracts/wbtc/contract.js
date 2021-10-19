import { WBTC_ABI } from './abi'
import { useWeb3React } from "@web3-react/core"
import { ethers } from 'ethers'


const CONTRACT_ADDRESS = '0x9035ff93d04F80D4D08B2F80A8e18E5DF6B41a3b'

export function useWBTCContract() {
    const { active, library: provider } = useWeb3React()

    if (!active) {
        return {}
    }

    const contract = new ethers.Contract(CONTRACT_ADDRESS, WBTC_ABI, provider).connect(provider.getSigner())

    return { active, contract }
}