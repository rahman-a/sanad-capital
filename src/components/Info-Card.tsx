import {
  UserWideIcon,
  UserClosedIcon,
  EmailIcon,
  PhoneIcon,
  CalenderIcon,
} from '@/assets/icons'
import {
  Box,
  HStack,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import * as React from 'react'

export interface IInfoCardProps {}

const infoData = [
  { id: 1, info: 'محمد محمد حسن', icon: UserClosedIcon },
  { id: 2, info: 'mohamedm@gmail.com', icon: EmailIcon },
  { id: 3, info: '+996 45 2980 777', icon: PhoneIcon },
  { id: 4, info: 'بتاريخ 23-01-2023 عند 10:00 صباحًا', icon: CalenderIcon },
]

export default function InfoCard(props: IInfoCardProps) {
  return (
    <Stack
      mt={1}
      w='full'
      alignItems='flex-end'
      className='surface-border-shadow'
      p={4}
    >
      <HStack spacing={4}>
        <Text as='h3' fontSize='sm' fontWeight='700'>
          المستشار
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
          <UserWideIcon color='secondary.500' />
        </Box>
      </HStack>
      <UnorderedList mt={2} listStyleType='none' spacing={4}>
        {infoData.map((item) => (
          <ListItem
            key={item.id}
            display='flex'
            flexDirection='row-reverse'
            alignItems='center'
            gap={1.5}
          >
            <ListIcon as={item.icon} color='primary.500' />
            <Text
              textAlign='end'
              color='gray.500'
              as='p'
              fontSize='sm'
              fontWeight='500'
            >
              {item.info}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  )
}
