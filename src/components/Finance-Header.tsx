import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DollarIcon,
  SuiteCaseIcon,
} from '@/assets/icons'
import { Button, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

export interface IFinanceHeaderProps {}

export default function FinanceHeader(props: IFinanceHeaderProps) {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <Flex
      justifyContent='space-between'
      flexDirection={{ base: 'column-reverse', md: 'row-reverse' }}
      alignItems='center'
      w='full'
    >
      <Stack
        borderRadius='full'
        className='surface-border-shadow'
        flexDirection='row-reverse'
        marginTop={{ base: '4rem', md: 0 }}
      >
        <HStack
          w={{ base: 40, sm: 60, xl: 80 }}
          p={{ base: '1rem', sm: '1.2rem 2rem', xl: '1.2rem 4rem' }}
          borderRadius='full'
          cursor='pointer'
          justifyContent='center'
          className={activeTab === 0 ? 'active-Finance' : ''}
          onClick={() => setActiveTab(0)}
          _hover={{
            bg: 'primary.500',
            color: 'white',
          }}
        >
          <Text width='max-content'>طلبات التمويل</Text>
          <SuiteCaseIcon />
        </HStack>
        <HStack
          w={{ base: 40, sm: 60, xl: 80 }}
          p={{ base: '1rem', sm: '1.2rem 2rem', xl: '1.2rem 4rem' }}
          borderRadius='full'
          cursor='pointer'
          justifyContent='center'
          className={activeTab === 1 ? 'active-Finance' : ''}
          onClick={() => setActiveTab(1)}
          _hover={{
            bg: 'primary.500',
            color: 'white',
          }}
        >
          <Text width='max-content'>منتج التمويل</Text>
          <DollarIcon />
        </HStack>
      </Stack>
      <Button
        position={{ base: 'absolute', md: 'relative' }}
        top={{ base: '5rem', md: 'unset' }}
        left={{ base: '1rem', md: 'unset' }}
        mb={{ base: '2rem', md: 0 }}
        colorScheme='secondary'
        leftIcon={<ArrowLeftIcon />}
      >
        طلب تمويل
      </Button>
    </Flex>
  )
}
