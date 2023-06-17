import * as React from 'react'
import FinanceStatus from './Finance-Status'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react'
import {
  BinIcon,
  BookmarkIcon,
  CalenderIcon,
  FilterIcon,
  MoneyIcon,
  PencilIcon,
} from '@/assets/icons'
import FinanceCardLabel from './Finance-Card-Label'
import { IFinanceStatusProps } from './Finance-Status'

export interface IFinanceCardProps extends IFinanceStatusProps {}

export default function FinanceCard({ status }: IFinanceCardProps) {
  return (
    <Box
      //   maxW={96}
      w={{ base: '100%', lg: '60%', xl: 96 }}
      display='flex'
      flexDirection='column'
      p={4}
      gap={4}
      mb={{ base: 2, lg: 4, xl: 6 }}
      className='surface-border-shadow'
      border='3px solid #edf2f7'
      boxShadow='sm'
      transition='all 0.2s ease-in-out'
      _hover={{
        border: '3px solid #4BB6AE',
        boxShadow: 'md',
      }}
    >
      <Flex justifyContent='space-between'>
        <HStack spacing={0.5}>
          <IconButton
            size='sm'
            bg='transparent'
            aria-label='delete'
            icon={<BinIcon />}
          />
          <IconButton
            size='sm'
            bg='transparent'
            aria-label='edit'
            icon={<PencilIcon />}
          />
        </HStack>
        <FinanceStatus status={status} />
      </Flex>
      <HStack spacing={2} justifyContent='flex-end'>
        <Text textAlign='end' as='h3' fontSize='lg' fontWeight='700'>
          شراء منتجات ذات استخدام الواد
        </Text>
        <BookmarkIcon />
      </HStack>
      <Flex justifyContent='flex-end' alignItems='center' gap={10}>
        <FinanceCardLabel label='تاريخ إنجاز المشروع' info='31-03-2023' />
        <FinanceCardLabel label='اسم الجهة' info='بن محمد محمدحسن' />
      </Flex>
      <Flex
        justifyContent={{ base: 'flex-end', sm: 'space-evenly' }}
        alignItems='center'
        gap={2}
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
        w='full'
      >
        <FinanceCardLabel
          label='مبلغ التمويل'
          info='30,000.000'
          icon={<MoneyIcon />}
        />
        <Divider
          orientation='vertical'
          borderLeftWidth={2.5}
          borderColor='gray.500'
          h='45px'
          display={{ base: 'none', sm: 'block' }}
        />
        <FinanceCardLabel
          label='مدة التمويل'
          info='قصير الأجل'
          icon={<CalenderIcon />}
        />
        <Divider
          orientation='vertical'
          borderLeftWidth={2.5}
          borderColor='gray.500'
          h='45px'
          display={{ base: 'none', sm: 'block' }}
        />
        <FinanceCardLabel
          label='نوع التمويل'
          info='تمويل مشاريع'
          icon={<FilterIcon />}
        />
      </Flex>
    </Box>
  )
}
