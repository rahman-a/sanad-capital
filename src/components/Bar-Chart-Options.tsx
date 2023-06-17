import { ChevronDownIcon } from '@/assets/icons'
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Switch,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export interface IBarChartOptionsProps {}

export default function BarChartOptions(props: IBarChartOptionsProps) {
  const [isRemained, setIsRemained] = useState(true)
  const [isPaid, setIsPaid] = useState(false)
  return (
    <Flex
      flexDirection='row-reverse'
      gap={4}
      display={{ base: 'none', xl: 'flex' }}
      mt='8px'
    >
      <HStack>
        <FormControl gap={1} display='flex' alignItems='center'>
          <Switch
            id='المبلغ المسدد'
            isChecked={isRemained}
            onChange={() => setIsRemained(!isRemained)}
          />
          <FormLabel
            fontWeight='700'
            fontSize='xs'
            w='max-content'
            cursor='pointer'
            htmlFor='المبلغ المسدد'
            m={0}
          >
            المبلغ المسدد
          </FormLabel>
        </FormControl>
        <FormControl gap={1} display='flex' alignItems='center'>
          <Switch
            id='الدفعات المتبقية'
            isChecked={isPaid}
            onChange={() => setIsPaid(!isPaid)}
          />
          <FormLabel
            cursor='pointer'
            w='max-content'
            htmlFor='الدفعات المتبقية'
            fontWeight='700'
            fontSize='xs'
            m={0}
          >
            الدفعات المتبقية
          </FormLabel>
        </FormControl>
      </HStack>
      <HStack
        spacing={4}
        cursor='pointer'
        minWidth={32}
        borderRadius='full'
        backgroundColor='gray.50'
        alignItems='center'
        justifyContent='space-evenly'
      >
        <Text
          color='gray.500'
          display={{ base: 'none', md: 'block' }}
          fontWeight='bold'
          fontSize={{ base: 'sm' }}
          as='p'
        >
          يناير 2023
        </Text>
        <Box display={{ base: 'none', md: 'block' }}>
          <ChevronDownIcon color='gray.500' boxSize={6} />
        </Box>
      </HStack>
    </Flex>
  )
}
