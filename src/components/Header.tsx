import { HamburgerIcon } from '@/assets/icons'
import { Avatar, Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { SearchIcon, BellIcon, ChevronDownIcon } from '@/assets/icons'
import userPlaceholder from '@/assets/images/user_placeholder.png'
import * as React from 'react'

export interface IHeaderProps {
  onOpen: () => void
  pageTitle: string
}

export default function Header({ onOpen, pageTitle }: IHeaderProps) {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      as='header'
      my={{ base: 5, md: 9 }}
    >
      <HStack alignItems='center'>
        <HStack
          spacing={4}
          cursor='pointer'
          width={{ base: 8, md: 48 }}
          height={{ base: 8, md: 12 }}
          borderRadius='full'
          backgroundColor='gray.50'
          alignItems='center'
          justifyContent='center'
        >
          <Box display={{ base: 'none', md: 'block' }}>
            <ChevronDownIcon color='gray.500' boxSize={6} />
          </Box>
          <Text
            display={{ base: 'none', md: 'block' }}
            fontWeight='bold'
            fontSize={{ base: 'sm', sm: 'md' }}
            as='p'
          >
            محمد حسن
          </Text>
          <Box>
            <Avatar
              size={{ base: 'xs', md: 'sm' }}
              name='محمد حسن'
              src={userPlaceholder.src}
            />
          </Box>
        </HStack>
        <Box
          position='relative'
          cursor='pointer'
          width={{ base: 8, md: 12 }}
          height={{ base: 8, md: 12 }}
          borderRadius='full'
          backgroundColor='gray.50'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <IconButton
            bg='transparent'
            aria-label='notification'
            icon={<BellIcon boxSize={{ base: 4, md: 6 }} />}
          />

          <Text
            as='span'
            position='absolute'
            top={{ base: 2, md: 3 }}
            right={{ base: 2, md: 3 }}
            width={{ base: 2, md: 2.5 }}
            height={{ base: 2, md: 2.5 }}
            borderRadius='full'
            backgroundColor='red.400'
          ></Text>
        </Box>
        <Box
          cursor='pointer'
          width={{ base: 8, md: 12 }}
          height={{ base: 8, md: 12 }}
          borderRadius='full'
          backgroundColor='gray.50'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <IconButton
            bg='transparent'
            aria-label='search'
            icon={<SearchIcon boxSize={{ base: 4, md: 6 }} />}
          />
        </Box>
      </HStack>
      <HStack>
        <Text fontWeight='bold' fontSize={{ base: 'lg', lg: '2xl' }} as='h1'>
          {pageTitle}
        </Text>
        <Box display={{ base: 'block', lg: 'none' }}>
          <HamburgerIcon onClick={onOpen} boxSize={10} />
        </Box>
      </HStack>
    </Flex>
  )
}
