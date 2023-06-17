import {
  CardReceiveIcon,
  CardSendIcon,
  EyeIcon,
  PaperSheetIcon,
  VisaIcon,
} from '@/assets/icons'
import {
  Box,
  Card,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import WalletCard from './Wallet-Card'
import { useState } from 'react'
import WalletAction from './Wallet-Action'

export interface IWalletProps {}

export default function Wallet(props: IWalletProps) {
  const [cardNum, setCardNum] = useState(0)
  return (
    <Stack spacing={4} w='100%'>
      <VStack>
        <WalletCard />
        <HStack>
          {[...Array(3)].map((_, i) => (
            <Text
              key={i}
              as='span'
              onClick={() => setCardNum(i)}
              w={cardNum === i ? 6 : 2.5}
              h='5px'
              bg={cardNum === i ? 'primary.500' : 'gray.200'}
              borderRadius='md'
              cursor='pointer'
              transition='all 0.3s ease'
            ></Text>
          ))}
        </HStack>
      </VStack>
      <WalletAction />
    </Stack>
  )
}
