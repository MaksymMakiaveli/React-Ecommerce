import { useAuthStore } from '@core/stores';
import { DoorExitIcon } from '@shared/UI';

import type { AuthState} from '@core/stores';

import styles from './LogoutAction.module.scss';

const authSelector = (state: AuthState) => [state.logout];

export const LogoutAction = () => {
  const [logout] = useAuthStore(authSelector);

  return (
    <span className={styles.logoutAction} onClick={logout}>
      <DoorExitIcon />
    </span>
  );
};
