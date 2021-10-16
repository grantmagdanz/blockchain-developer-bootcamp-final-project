import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ThemeProvider, theme, CSSReset } from "@chakra-ui/react"
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import Header from "../components/header"

function getLibrary(provider: any) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ChakraProvider>
            <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </Web3ReactProvider>
  )
}
export default MyApp