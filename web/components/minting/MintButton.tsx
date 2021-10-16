import { Button } from "@chakra-ui/react"

export default function MintButton () {
    return (
        <Button mt="8" as="a" size="lg" colorScheme="blue" fontWeight="bold" onClick={() => alert("minting!")}>Mint</Button>
    )
}