import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import Header from "../components/header"

function getLibrary(provider: any) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider>
          <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3ReactProvider>
  )
}
export default MyApp