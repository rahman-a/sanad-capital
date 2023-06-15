import { extendTheme } from '@chakra-ui/react'
import { Cairo } from 'next/font/google'

const CairoFont = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
})

export const useChakraTheme = () => {
  const colors = {
    primary: '#0249AC',
    secondary: '#4BB6AE',
    variation: '#FFCA24',
    alert: '#E70000',
    surface: '#FAFAFA',
  }

  const fonts = {
    body: CairoFont.style.fontFamily,
    Heading: CairoFont.style.fontFamily,
  }

  return extendTheme({
    direction: 'rtl',
    colors,
    fonts,
  })
}
