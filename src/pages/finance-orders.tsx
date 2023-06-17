import { FinanceCard, FinanceHeader } from '@/components'
import { Box, Flex } from '@chakra-ui/react'

export default function FinanceOrder() {
  return (
    <Flex flexDirection='column' alignItems='flex-end' gap={6}>
      <FinanceHeader />
      <Box
        w='full'
        display='flex'
        alignItems='flex-start'
        justifyContent='flex-end'
        p={4}
        mb={{ base: 2, lg: 4, xl: 6 }}
        className='surface-border-shadow'
      >
        <Flex
          alignItems='center'
          flexDirection='row-reverse'
          justifyContent='flex-start'
          flexWrap='wrap'
          gap={3}
        >
          <FinanceCard status='draft' />
          <FinanceCard status='in-progress' />
          <FinanceCard status='confirmed' />
        </Flex>
      </Box>
    </Flex>
  )
}
