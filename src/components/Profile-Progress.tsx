import { CheckMarkIcon, MoneyIcon, PlusCircleIcon } from '@/assets/icons'
import {
  Box,
  HStack,
  ListIcon,
  ListItem,
  Progress,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'

export interface IProfileProgressProps {}

const ProfileProgressData = [
  { id: 1, label: 'تأكيد البريد الإلكتروني', isDone: true },
  { id: 2, label: 'معلومات الشركة', isDone: true },
  { id: 3, label: 'إقرار', isDone: false },
  { id: 4, label: 'معلومات الإتصال', isDone: false },
  { id: 5, label: 'إضافة المعلومات البنكية', isDone: false },
  { id: 6, label: 'إرفاق المستندات', isDone: false },
]

export default function ProfileProgress(props: IProfileProgressProps) {
  return (
    <Stack
      mt={2}
      w='full'
      alignItems='flex-end'
      className='surface-border-shadow'
      p={4}
    >
      <HStack spacing={4}>
        <Text as='h3' fontSize='sm' fontWeight='700'>
          معلوماتى
        </Text>
        <Box
          bg='gray.100'
          borderRadius='full'
          w={8}
          h={8}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <MoneyIcon color='secondary.500' />
        </Box>
      </HStack>
      <VStack spacing={2} mt={2} w='full'>
        <HStack spacing={4} w='100%' justifyContent='space-between'>
          <Text as='h4' fontSize='sm' fontWeight='700' color='gray.500'>
            45%
          </Text>
          <Text
            textAlign='end'
            as='h4'
            fontSize={{ base: 'sm', lg: 'md' }}
            fontWeight='400'
            color='gray.500'
          >
            استكمل البيانات لتقديم طلب التمويل
          </Text>
        </HStack>
        <Box w='full'>
          <Progress
            value={45}
            colorScheme='secondary'
            w='full'
            borderRadius='xl'
            style={{ direction: 'rtl' }}
          />
        </Box>
      </VStack>
      <UnorderedList mt={2} listStyleType='none' spacing={4}>
        {ProfileProgressData.map((item) => (
          <ListItem
            key={item.id}
            display='flex'
            flexDirection='row-reverse'
            alignItems='center'
            gap={1}
            cursor={item.isDone ? 'default' : 'pointer'}
          >
            <ListIcon
              as={item.isDone ? CheckMarkIcon : PlusCircleIcon}
              color='primary.500'
            />
            <Text as='p' fontSize='sm' fontWeight='500'>
              {item.label}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  )
}
