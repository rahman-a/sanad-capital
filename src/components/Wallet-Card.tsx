import { EyeIcon, PaperSheetIcon, VisaIcon } from '@/assets/icons'
import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import * as React from 'react'

export interface IWalletCardProps {}

export default function WalletCard(props: IWalletCardProps) {
  return (
    <Stack
      color='white'
      p={6}
      position='relative'
      w='100%'
      bg='primary.500'
      borderRadius='2xl'
      gap={0}
    >
      <Box w='100%' textAlign='start'>
        <VisaIcon w={20} />
      </Box>
      <VStack w='100%' alignItems='flex-end'>
        <HStack>
          <EyeIcon cursor='pointer' />
          <Text as='p' fontSize='lg' fontWeight='400'>
            الرصيد
          </Text>
        </HStack>
        <Text
          display='flex'
          flexDirection='row-reverse'
          alignItems='center'
          gap={1}
          as='p'
          fontSize='2xl'
          fontWeight='700'
        >
          <span>24,000.55</span>
          <span>ر.س</span>
        </Text>
        <VStack w='100%' mt={2} spacing={1.5} alignItems='flex-end'>
          <Text as='p' fontSize='xs' fontWeight='400'>
            رقم حسابك الاستثماري
          </Text>
          <HStack
            justifyContent='center'
            w='100%'
            border='1px solid #fff'
            borderRadius='2xl'
            p={2}
            spacing={2}
          >
            <Text as='p' fontSize='md' fontWeight='500'>
              SA10 301 0344 5454 545
            </Text>
            <PaperSheetIcon boxSize={6} />
          </HStack>
        </VStack>
      </VStack>
    </Stack>
  )
}
