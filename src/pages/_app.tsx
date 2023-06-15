import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components'
import { useChakraTheme } from '@/hooks/useChakraTheme'

import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useChakraTheme()
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
