import { Box, HStack, Text, VStack } from '@chakra-ui/react'

interface IFinanceCardLabelProps {
  label: string
  icon?: React.ReactNode
  info: string
}

export default function FinanceCardLabel({
  label,
  info,
  icon,
}: IFinanceCardLabelProps) {
  return (
    <VStack>
      <Box
        borderRadius='full'
        p='0.2rem 0.8rem'
        bg='#FAFAFA'
        border='1px solid #E0E0E0'
        display='grid'
        placeItems='center'
      >
        <HStack spacing={1}>
          <Text w='max-content' fontSize='xs' fontWeight='400'>
            {label}
          </Text>
          {icon && icon}
        </HStack>
      </Box>
      <Text textAlign='end' color='gray.500' fontSize='sm' fontWeight='700'>
        {info}
      </Text>
    </VStack>
  )
}
