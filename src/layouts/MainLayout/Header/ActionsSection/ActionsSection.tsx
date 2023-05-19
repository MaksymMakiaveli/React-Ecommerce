import { CartAction } from './CartAction';
import { LogoutAction } from './LogoutAction';
import { ThemeAction } from './ThemeAction';

import styles from './ActionsSection.module.scss';

export const ActionsSection = () => {
  return (
    <div className={styles.actionsSection}>
      <ThemeAction />
      <CartAction />
      <LogoutAction />
    </div>
  );
};
