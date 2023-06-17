import { CardReceiveIcon, CardSendIcon } from '@/assets/icons'
import { HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import * as React from 'react'

export interface IWalletActionProps {}

export default function WalletAction(props: IWalletActionProps) {
  return (
    <HStack spacing={8} w='100%' alignItems='center' justifyContent='center'>
      <VStack>
        <IconButton
          cursor='pointer'
          className='surface-border-shadow'
          p={4}
          aria-label='money draw'
          bg='transparent'
          color='primary.500'
          _hover={{
            bg: 'primary.500',
            color: 'white',
          }}
          icon={<CardSendIcon boxSize={6} />}
        />
        <Text color='gray.600' as='p' fontSize='md' fontWeight='500'>
          سحب
        </Text>
      </VStack>
      <VStack>
        <IconButton
          cursor='pointer'
          className='surface-border-shadow'
          p={4}
          aria-label='money deposit'
          bg='transparent'
          color='primary.500'
          _hover={{
            bg: 'primary.500',
            color: 'white',
          }}
          icon={<CardReceiveIcon boxSize={6} />}
        />
        <Text color='gray.600' as='p' fontSize='md' fontWeight='500'>
          إيداع
        </Text>
      </VStack>
    </HStack>
  )
}
