import {
  HomeIcon,
  EstablishmentIcon,
  CoinIcon,
  WalletIcon,
  OperationIcon,
  SettingsIcon,
} from '@/assets/icons'

export const navigation = [
  { id: 1, label: 'الرئيسية', href: '/', icon: <HomeIcon /> },
  { id: 2, label: 'بيانات المنشأة', href: '#', icon: <EstablishmentIcon /> },
  {
    id: 3,
    label: 'طلبات التمويل',
    href: '/finance-orders',
    icon: <CoinIcon />,
  },
  { id: 4, label: 'المحفظة', href: '#', icon: <WalletIcon /> },
  {
    id: 5,
    label: 'العمليات',
    href: '#',
    icon: <OperationIcon />,
    children: [
      { id: 1, label: 'الإختيار 1', href: '#' },
      { id: 2, label: 'الإختيار 2', href: '#' },
    ],
  },
  { id: 6, label: 'الإعدادات', href: '#', icon: <SettingsIcon /> },
]
