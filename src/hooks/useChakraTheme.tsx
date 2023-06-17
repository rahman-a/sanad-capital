import { extendTheme } from '@chakra-ui/react'
import { Cairo } from 'next/font/google'

const CairoFont = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
})

export const useChakraTheme = () => {
  const colors = {
    primary: {
      '50': '#E6F0FF',
      '100': '#B8D6FE',
      '200': '#8BBBFE',
      '300': '#5EA0FD',
      '400': '#3086FD',
      '500': '#0249AC',
      '600': '#0256CA',
      '700': '#024097',
      '800': '#012B65',
      '900': '#011532',
    },
    secondary: {
      '50': '#EDF8F7',
      '100': '#CCEAE8',
      '200': '#ACDDD9',
      '300': '#8BD0CB',
      '400': '#6AC3BC',
      '500': '#4BB6AE',
      '600': '#3B918B',
      '700': '#2C6D68',
      '800': '#1D4945',
      '900': '#0F2423',
    },
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
