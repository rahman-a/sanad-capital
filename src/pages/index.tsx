import { Flex, HStack, IconButton, Stack, Text } from '@chakra-ui/react'
import {
  BarChart,
  InfoCard,
  ProfileCard,
  ProfileProgress,
  StatsCard,
  Wallet,
} from '@/components'
import { stats } from '@/data/Stats-Data'
import { DotVerticalIcon } from '@/assets/icons'

export default function Home() {
  return (
    <Flex
      w='full'
      alignItems='flex-start'
      flexDirection={{ base: 'column', lg: 'row-reverse' }}
      gap={5}
    >
      <HStack
        w={{ base: '100%', lg: '50%', xl: '68%' }}
        flexDirection='column'
        alignItems='flex-end'
      >
        <ProfileCard />
        <Flex
          w='100%'
          alignItems='center'
          justifyContent={{
            base: 'flex-start',
            md: 'center',
            lg: 'flex-start',
          }}
          flexDirection={{ base: 'column', md: 'row-reverse' }}
          flexWrap='wrap'
          gap={4}
          mt={{ base: 5, lg: 12 }}
        >
          {stats.map((stat) => (
            <StatsCard
              key={stat.id}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </Flex>
        <BarChart />
      </HStack>
      <Stack
        flexGrow='2'
        w={{ base: '100%', lg: '50%', xl: '32%' }}
        p={4}
        alignItems='center'
        justifyContent='center'
        className='surface-border-shadow'
      >
        <HStack
          w='100%'
          justifyContent='space-between'
          alignItems='center'
          flexDirection='row-reverse'
          mb={1}
        >
          <Text as='h3' fontWeight='700' fontSize='xl'>
            المحفظة
          </Text>
          <IconButton
            size='xs'
            bg='transparent'
            aria-label='data-option'
            icon={<DotVerticalIcon />}
          />
        </HStack>
        <Wallet />
        <ProfileProgress />
        <InfoCard />
      </Stack>
    </Flex>
  )
}
