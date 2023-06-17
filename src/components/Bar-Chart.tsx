import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Switch,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { ChevronDownIcon, DotVerticalIcon } from '@/assets/icons'
import BarChartOptions from './Bar-Chart-Options'
export interface IBarChartProps {}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
      textDirection: 'rtl' as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: '__Cairo_4f30d7',
          size: 12,
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: '__Cairo_4f30d7',
          size: 12,
        },
        callback: function (value: number | string) {
          const number = value as number
          return number >= 1000
            ? `${number / 1000}K`
            : number >= 1000000
            ? `${number / 1000000}M`
            : value
        },
      },
    },
  },
  maintainAspectRatio: false,
}

const labels = [
  '10 يناير',
  '11 يناير',
  '12 يناير',
  '13 يناير',
  '14 يناير',
  '15 يناير',
  '16 يناير',
  '17 يناير',
  '18 يناير',
]

export default function BarChart(props: IBarChartProps) {
  const [data, setData] = React.useState<any>(null)
  React.useEffect(() => {
    setData({
      labels,
      datasets: [
        {
          data: [1500, 5000, 2600, 1200, 8400, 6900, 7824, 10500, 15320],
          backgroundColor: '#F2F6FF',
          hoverBackgroundColor: '#0249AC',
          borderRadius: 12,
        },
      ],
    })
  }, [])
  return (
    <Box
      w={{ base: 'full', lg: '70vw', xl: 'full' }}
      h='290px'
      display='flex'
      justifyContent='flex-end'
      flexDirection='column'
      alignItems='normal'
      px={4}
      mt={{ base: 4, xl: 10 }}
      className='surface-border-shadow'
    >
      <Flex
        justifyContent='space-between'
        alignItems='center'
        flexDirection='row-reverse'
        py={4}
      >
        <Text
          textAlign='end'
          as='h3'
          fontWeight='700'
          fontSize={{ base: 'md', '2xl': 'lg' }}
        >
          توزيع مبالغ التمويل
        </Text>
        <BarChartOptions />
        <IconButton
          display={{ base: 'block', xl: 'none' }}
          size='xs'
          bg='transparent'
          aria-label='data-option'
          icon={<DotVerticalIcon />}
        />
      </Flex>
      {data && (
        <Box h='294px'>
          <Bar options={options} data={data} />
        </Box>
      )}
    </Box>
  )
}
