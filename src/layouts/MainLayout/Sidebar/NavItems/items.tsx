import { routes } from '@core/routes';
import { HouseIcon } from '@shared/UI';

import type { ReactNode } from 'react';

type ItemType = {
  to: string;
  label: string;
  key: string;
  icon?: ReactNode;
};

export const items: ItemType[] = [
  {
    to: routes.home.root,
    label: 'Home',
    key: routes.home.key,
    icon: <HouseIcon />,
  },

  {
    to: '/home',
    label: 'Home2',
    key: 'home2',
    icon: <HouseIcon />,
  },
];
