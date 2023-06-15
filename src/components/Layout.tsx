import {
  Box,
  Flex,
  Container,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react'

import * as React from 'react'
import Navigation from './Navigation'
import Drawer from './Drawer'
import Header from './Header'
import Head from 'next/head'
export interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  const [isLargerThanLarge] = useMediaQuery('(min-width: 62em)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [pageTitle, setPageTitle] = React.useState<string>('الرئيسية')
  const [activeItem, setActiveItem] = React.useState<number | null>(1)

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='content-type' content='text/html; charset=UTF-8' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link href='/favicon.ico' rel='shortcut icon' type='image/svg' />
        <link href='/favicon.ico' rel='apple-touch-icon' />
        <link href='/favicon.ico' rel='apple-touch-icon' sizes='72x72' />
        <link href='/favicon.ico' rel='apple-touch-icon' sizes='114x114' />
        <title>Sanad Capital</title>
      </Head>
      <Flex flexDirection='row-reverse' justifyContent='center'>
        {isLargerThanLarge ? (
          <Box
            as='nav'
            position='fixed'
            top={0}
            right={0}
            minH='100vh'
            width={60}
            backgroundColor='surface'
            boxShadow='md'
          >
            <Navigation
              setPageTitle={setPageTitle}
              setActiveItem={setActiveItem}
              activeItem={activeItem}
            />
          </Box>
        ) : (
          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            setPageTitle={setPageTitle}
            setActiveItem={setActiveItem}
            activeItem={activeItem}
          />
        )}

        <Container
          maxW={{ base: '100vw', lg: 'calc(100vw - 15rem)' }}
          mr={{ base: 0, lg: 60 }}
          px={{ base: 4, lg: 8 }}
        >
          <Header onOpen={onOpen} pageTitle={pageTitle} />
          <Box as='main' mt={{ base: 0, lg: 16 }}>
            {children}
          </Box>
        </Container>
      </Flex>
    </>
  )
}
