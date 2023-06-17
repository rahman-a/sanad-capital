import {
  Box,
  Button,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { ProfileItems } from '@/data/Profile-Data'
import { ArrowNarrowRightIcon } from '@/assets/icons'

export interface IProfileCardProps {}

export default function ProfileCard(props: IProfileCardProps) {
  return (
    <Box backgroundColor='primary.500' borderRadius='lg' w='100%' p={8}>
      <HStack
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        alignItems='flex-end'
        justifyContent='flex-end'
      >
        <Button
          color='primary'
          fontSize='xs'
          fontWeight='700'
          w='20rem'
          mt={{ base: 5, md: 0 }}
          leftIcon={<ArrowNarrowRightIcon color='primary' boxSize={4} />}
        >
          طلب تمويل
        </Button>
        <VStack alignItems='flex-end' spacing={6}>
          <Text
            textAlign='end'
            as='h2'
            fontWeight='700'
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            color='white'
          >
            مؤسسة بن محمد للإستشارات القانونية
          </Text>
          <UnorderedList
            display='flex'
            flexDirection={{ base: 'column', lg: 'row-reverse' }}
            alignItems='flex-end'
            listStyleType='none'
            flexWrap='wrap'
            color='white'
            gap={5}
          >
            {ProfileItems.map((item) => (
              <ListItem
                key={item.id}
                textAlign='end'
                w={{ base: '100%', xl: '45%' }}
                color='gray.300'
                fontWeight='400'
                fontSize='sm'
                display='flex'
                alignItems='flex-start'
                justifyContent='flex-end'
                gap={2}
              >
                <Text>
                  {item.label ? `${item.label}: ` : ''}
                  {item.value}
                </Text>
                {item.icon}
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>
      </HStack>
    </Box>
  )
}
