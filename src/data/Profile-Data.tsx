import {
  PencilIcon,
  UserClosedIcon,
  PhoneIcon,
  EmailIcon,
} from '@/assets/icons'

export const ProfileItems = [
  {
    id: 1,
    label: 'رقم السجل التجاري',
    value: '5457 4543 97',
    icon: <PencilIcon />,
  },
  { id: 3, label: null, value: '+996 45 2980 777', icon: <PhoneIcon /> },
  {
    id: 2,
    label: 'إسم المفوض',
    value: 'محمد محمد حسن',
    icon: <UserClosedIcon />,
  },
  { id: 4, label: null, value: 'mohamedm@gmail.com', icon: <EmailIcon /> },
]
