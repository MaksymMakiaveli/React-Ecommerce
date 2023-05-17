import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />

      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
