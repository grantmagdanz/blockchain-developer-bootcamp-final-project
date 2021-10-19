import { GLASS_ABI } from './abi'
import { useWeb3React } from "@web3-react/core"
import { ethers } from 'ethers'


export const CONTRACT_ADDRESS = '0xEb9E379C8538C0bba35deF0a766731ab28eB0647'

export function useGlassContract() {
    const { active, library: provider } = useWeb3React()

    if (!active) {
        return {}
    }

    const contract = new ethers.Contract(CONTRACT_ADDRESS, GLASS_ABI, provider).connect(provider.getSigner())

    return { active, contract }
}