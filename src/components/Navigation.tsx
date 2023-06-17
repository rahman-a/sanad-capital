import { Box, ListItem, Link, UnorderedList, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import * as React from 'react'
import NextLink from 'next/link'
import SubItems from './Sub-Items'
import SanadCapitalLogo from '@/assets/images/logo.svg'
import { navigation } from '@/data/Navigation-Items'
import { QuestionIcon, ArrowRightIcon, ChevronDownIcon } from '@/assets/icons'

export interface INavigationProps {
  setPageTitle: React.Dispatch<React.SetStateAction<string>>
  setActiveItem: React.Dispatch<React.SetStateAction<number | null>>
  activeItem: number | null
  onClose?: () => void
}

export default function Navigation({
  setPageTitle,
  setActiveItem,
  activeItem,
  onClose,
}: INavigationProps) {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(true)
  return (
    <Box width='100%'>
      <Box
        height='39px'
        width='167px'
        position='relative'
        m='45px 24px 60px 54px'
      >
        <Link href='#' as={NextLink}>
          <Image src={SanadCapitalLogo} alt='Sanad Capital Logo' fill />
        </Link>
      </Box>
      <VStack alignItems='flex-end' mx='24px'>
        <UnorderedList
          styleType='none'
          width='100%'
          textAlign='end'
          display='flex'
          flexDirection='column'
          gap='10px'
        >
          {navigation.map((item) => (
            <ListItem width='100%' key={item.id}>
              <Link
                _hover={{
                  textDecoration: 'none',
                  backgroundColor: '#0249AC',
                  color: '#fff',
                  fontWeight: '700',
                }}
                onClick={() => {
                  setActiveItem(item.id)
                  setPageTitle(item.label)
                  onClose && onClose()
                  if (item.children && item.children.length > 0) {
                    setIsCollapsed(!isCollapsed)
                    return
                  }
                  setIsCollapsed(true)
                }}
                className={`navigation-item ${
                  activeItem === item.id ? 'active-item' : ''
                }`}
                fontSize='sm'
                color='gray.500'
                display='flex'
                alignItems='center'
                justifyContent={item.children ? 'space-between' : 'flex-end'}
                width='100%'
                padding='10px 20px'
                borderRadius='10px'
                fontWeight='500'
                href={item.href}
                as={NextLink}
              >
                {item.children && item.children.length > 0 && (
                  <ChevronDownIcon />
                )}
                <Box
                  transition='margin 300ms ease-in-out'
                  as='span'
                  display='flex'
                  gap='5px'
                >
                  {item.label}
                  {item.icon}
                </Box>
              </Link>
              {item.children && item.children.length > 0 && (
                <SubItems
                  setPageTitle={setPageTitle}
                  items={item.children}
                  isParent={activeItem === item.id}
                  isCollapsed={isCollapsed}
                />
              )}
            </ListItem>
          ))}
        </UnorderedList>
      </VStack>
      <VStack
        alignItems='flex-end'
        position='absolute'
        bottom='0'
        width='100%'
        right='24px'
        mb='60px'
      >
        <UnorderedList
          styleType='none'
          textAlign='end'
          display='flex'
          flexDirection='column'
          gap='10px'
        >
          <ListItem width='100%'>
            <Link
              _hover={{
                textDecoration: 'none',
                backgroundColor: '#0249AC',
                color: '#fff',
                fontWeight: '700',
              }}
              onClick={() => {
                setPageTitle('الدعم والمساعدة')
                setActiveItem(7)
              }}
              className={`navigation-item ${
                activeItem === 7 ? 'active-item' : ''
              }`}
              fontSize='sm'
              color='gray.500'
              display='flex'
              alignItems='center'
              justifyContent='flex-end'
              width='100%'
              padding='10px 20px'
              borderRadius='10px'
              gap='5px'
              href='#'
              as={NextLink}
              fontWeight='500'
            >
              <Box
                transition='margin 300ms ease-in-out'
                as='span'
                display='flex'
                gap='5px'
              >
                الدعم والمساعدة
                <QuestionIcon />
              </Box>
            </Link>
          </ListItem>
          <ListItem width='100%'>
            <Link
              _hover={{
                textDecoration: 'none',
                backgroundColor: '#0249AC',
                color: '#fff',
                fontWeight: '700',
              }}
              onClick={() => setActiveItem(8)}
              className={`navigation-item ${
                activeItem === 8 ? 'active-item' : ''
              }`}
              fontSize='sm'
              color='gray.500'
              display='flex'
              alignItems='center'
              justifyContent='flex-end'
              width='100%'
              padding='10px 20px'
              borderRadius='10px'
              fontWeight='500'
              gap='5px'
              href='#'
              as={NextLink}
            >
              <Box
                transition='margin 300ms ease-in-out'
                as='span'
                display='flex'
                gap='5px'
              >
                تسجيل خروج
                <ArrowRightIcon />
              </Box>
            </Link>
          </ListItem>
        </UnorderedList>
      </VStack>
    </Box>
  )
}
