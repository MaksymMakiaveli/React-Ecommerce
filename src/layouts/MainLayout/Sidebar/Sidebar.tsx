import { memo, useEffect } from 'react';

import { useMainLayoutStore } from '@core/stores';
import { useWindowSize } from '@hooks';
import cl from 'classnames';

import { NavItems } from './NavItems';
import { TopSidebar } from './TopSidebar';

import type { MainLayoutStore } from '@core/stores';
import type { CSSProperties } from 'react';

import styles from './Sidebar.module.scss';

const mainLayoutSelector = (state: MainLayoutStore) =>
  [state.size, state.isCollapsed, state.sizeMap, state.onChangeSize, state.setIsCollapsed] as const;

export const Sidebar = memo(() => {
  const { width } = useWindowSize();

  const [size, isCollapsed, sizeMap, onChangeSize, setIsCollapsed] =
    useMainLayoutStore(mainLayoutSelector);

  const classes = cl(styles.sidebar, {
    [styles.sidebarCollapsed]: isCollapsed,
    [styles.sidebarSm]: size === 'sm',
  });

  useEffect(() => {
    if (width) {
      if (size !== 'sm' && width <= 991) {
        onChangeSize('sm');
        if (!isCollapsed) {
          setIsCollapsed(true);
        }
      }

      if (size !== 'lg' && width > 991) {
        onChangeSize('lg');
        if (isCollapsed) {
          setIsCollapsed(false);
        }
      }
    }
  }, [width, size]);

  const sidebarStyles: CSSProperties = {
    maxWidth: isCollapsed ? sizeMap.sidebar.collapsedWidth : sizeMap.sidebar.width,
  };

  return (
    <div className={classes} style={sidebarStyles}>
      <TopSidebar />
      <NavItems />
    </div>
  );
});
