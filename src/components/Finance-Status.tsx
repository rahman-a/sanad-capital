import { Box, Text } from '@chakra-ui/react'
import * as React from 'react'

export interface IFinanceStatusProps {
  status: 'draft' | 'confirmed' | 'in-progress'
}

export default function FinanceStatus({ status }: IFinanceStatusProps) {
  const text = {
    draft: 'مسودة',
    confirmed: 'منفذة',
    'in-progress': 'تحت الدراسة',
  }
  const textColor = {
    draft: '#FF4747',
    confirmed: '#22C55E',
    'in-progress': '#FF784B',
  }
  const bg = {
    draft: '#FFF7F5',
    confirmed: '#F6FDF9',
    'in-progress': '#FFF7F5',
  }
  return (
    <Box
      w={24}
      h={10}
      p={2}
      display='flex'
      alignItems='center'
      justifyContent='center'
      borderRadius='sm'
      bg={bg[status]}
    >
      <Text color={textColor[status]}>{text[status]}</Text>
    </Box>
  )
}
