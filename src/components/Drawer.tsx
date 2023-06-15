import * as React from 'react'
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import Navigation from './Navigation'

export interface IDrawerProps {
  isOpen: boolean
  onClose: () => void
  setPageTitle: React.Dispatch<React.SetStateAction<string>>
  setActiveItem: React.Dispatch<React.SetStateAction<number | null>>
  activeItem: number | null
}

export default function Drawer({
  isOpen,
  onClose,
  setPageTitle,
  setActiveItem,
  activeItem,
}: IDrawerProps) {
  return (
    <ChakraDrawer size='xs' isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent width='60 !important'>
        <DrawerCloseButton />
        <DrawerBody p={0} backgroundColor='surface'>
          <Navigation
            setPageTitle={setPageTitle}
            setActiveItem={setActiveItem}
            activeItem={activeItem}
          />
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  )
}
