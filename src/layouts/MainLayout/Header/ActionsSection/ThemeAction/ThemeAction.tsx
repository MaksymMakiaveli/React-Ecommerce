import { useThemeStore } from '@core/stores';
import { MoonIcon } from '@shared/UI';
import cl from 'classnames';

import type { ThemeStore } from '@core/stores';

import styles from './ThemeAction.module.scss';

const themeSelector = (state: ThemeStore) => [state.currentTheme, state.setCurrentTheme] as const;

export const ThemeAction = () => {
  const [currentTheme, setCurrentTheme] = useThemeStore(themeSelector);

  const classes = cl(styles.themeAction, {
    [styles.themeActionActive]: currentTheme === 'dark',
  });

  const handleTheme = () => {
    const theme = currentTheme === 'dark' ? 'light' : 'dark';

    setCurrentTheme(theme);
  };

  return (
    <div className={classes}>
      <span className={styles.themeActionButton} onClick={handleTheme}>
        <MoonIcon />
      </span>
    </div>
  );
};
