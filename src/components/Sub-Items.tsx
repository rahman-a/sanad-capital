import { Box, Link, ListItem, UnorderedList } from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'

export interface ISubItemProps {
  items: {
    id: number
    label: string
    href: string
    icon?: React.ReactNode
  }[]
  isParent?: boolean
  isCollapsed?: boolean
  setPageTitle: React.Dispatch<React.SetStateAction<string>>
}

export default function SubItem({
  items,
  isCollapsed,
  setPageTitle,
  isParent,
}: ISubItemProps) {
  const [activeItem, setActiveItem] = React.useState<number | null>(null)
  return (
    <UnorderedList
      styleType='none'
      textAlign='end'
      display='flex'
      flexDirection='column'
      gap='5px'
      transition='all 500ms 200ms ease-in-out'
      opacity={isParent && !isCollapsed ? '1' : '0'}
      h={isParent && !isCollapsed ? `calc(${items.length} * 40px)` : '0'}
      overflow={isParent && !isCollapsed ? 'visible' : 'hidden'}
      mt={isParent && !isCollapsed ? '10px' : '0'}
    >
      {items.map((item) => (
        <ListItem key={item.id} width='100%'>
          <Link
            _hover={{
              textDecoration: 'none',
              backgroundColor: '#0346a2',
              color: '#fff',
            }}
            onClick={() => {
              setPageTitle(item.label)
              setActiveItem(item.id)
            }}
            className={activeItem === item.id ? 'active-item' : ''}
            fontSize='xs'
            color='gray.500'
            display='flex'
            alignItems='center'
            justifyContent={'flex-end'}
            width='100%'
            padding='8px 15px'
            borderRadius='10px'
            fontWeight='700'
            href={item.href}
            as={NextLink}
          >
            <Box
              transition='margin 300ms ease-in-out'
              as='span'
              display='flex'
              gap='5px'
            >
              {item.label}
              {item.icon && item.icon}
            </Box>
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  )
}
