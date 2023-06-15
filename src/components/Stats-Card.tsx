import * as React from 'react'
import { Box, HStack, VStack, IconButton, Text } from '@chakra-ui/react'
import { DotVerticalIcon, TrendingUpIcon } from '@/assets/icons'
export interface IStatsCardProps {
  label: string
  value: number
  suffix?: string
}

export default function StatsCard({
  label,
  value,
  suffix,
  ...props
}: IStatsCardProps) {
  return (
    <VStack
      width={{ base: '100%', md: '45%', lg: 80 }}
      borderRadius='xl'
      boxShadow='sm'
      border='1px solid #EDF2F7'
      alignItems='normal'
      p={4}
      spacing={5}
      {...props}
    >
      <HStack justifyContent='space-between' alignItems='center'>
        <IconButton
          size='xs'
          bg='transparent'
          aria-label='data-option'
          icon={<DotVerticalIcon />}
        />
        <Text as='p' fontWeight='500' fontSize='sm' color='gray.600'>
          {label}
        </Text>
      </HStack>
      <HStack flexDirection='row-reverse'>
        <Text
          as='h2'
          fontWeight='700'
          fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}
          lineHeight='125%'
        >
          {value}
        </Text>
        {suffix && (
          <Text
            as='span'
            fontWeight='700'
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            color='gray.600'
          >
            {suffix}
          </Text>
        )}
      </HStack>
      <HStack spacing={8} justifyContent='flex-end'>
        <Text
          display='flex'
          gap={1}
          lineHeight='150%'
          fontWeight='600'
          fontSize='sm'
          color='gray.600'
        >
          <span>2032</span>
          <span>يناير</span>
          <span>10</span>
        </Text>
        <HStack spacing={0.5}>
          <TrendingUpIcon color='green.400' />
          <Text as='span' fontWeight='600' fontSize='sm' color='green.400'>
            2,05%
          </Text>
        </HStack>
      </HStack>
    </VStack>
  )
}
