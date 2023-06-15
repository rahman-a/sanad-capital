import { Flex, HStack } from '@chakra-ui/react'
import { ProfileCard, StatsCard } from '@/components'
import { stats } from '@/data/Stats-Data'

export default function Home() {
  return (
    <Flex
      alignItems='flex-start'
      flexDirection={{ base: 'column', lg: 'row-reverse' }}
      gap={5}
    >
      <HStack
        w={{ base: '100%', lg: 'auto' }}
        flexGrow={{ base: '1', lg: '6' }}
        flexDirection='column'
        alignItems='flex-end'
      >
        <ProfileCard />
        <Flex
          w='100%'
          alignItems='center'
          flexDirection={{ base: 'column', md: 'row-reverse' }}
          flexWrap='wrap'
          gap={{ base: 3, md: 5, lg: 8, xl: 10 }}
          mt={{ base: 5, lg: 10 }}
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
      </HStack>
      <HStack
        w={{ base: '100%', lg: 'auto' }}
        flexGrow={{ base: '1', lg: '2' }}
      ></HStack>
    </Flex>
  )
}
