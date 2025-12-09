
export interface MenuItem {
  id: string;
  label: string;
  icon?: string; // Lucide icon name
  href?: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: 'LayoutDashboard',
    href: '/',
  },
  {
    id: '2',
    label: 'Atoms',
    icon: 'Atom',
    children: [
      { id: '2-1', label: 'Buttons', icon: 'MousePointerClick', href: '/atoms/buttons' },
      { id: '2-3', label: 'Cards', icon: 'CreditCard', href: '/atoms/cards' },
      { id: '2-4', label: 'Inputs', icon: 'Type', href: '/atoms/inputs' },
      { id: '2-5', label: 'Checks', icon: 'CheckSquare', href: '/atoms/checks' },
      { id: '2-6', label: 'Selects', icon: 'ListChecks', href: '/atoms/selects' },
      { id: '2-7', label: 'Textareas', icon: 'Type', href: '/atoms/textarea' },
      { id: '2-8', label: 'Tooltips', icon: 'MessageSquare', href: '/atoms/tooltips' },
      { id: '2-9', label: 'Images', icon: 'Image', href: '/atoms/image' },
    ],
  },
  {
    id: '3',
    label: 'Molecules',
    icon: 'Layers',
    children: [
      { id: '3-1', label: 'SimpleDatePicker', icon: 'Calendar', href: '/molecules/simpledatepicker' },
      { id: '3-2', label: 'DoubleDatePicker', icon: 'CalendarRange', href: '/molecules/doubledatepicker' },
      { id: '3-3', label: 'ImageUploader', icon: 'Upload', href: '/molecules/imageuploader' },
    ],
  },
];
