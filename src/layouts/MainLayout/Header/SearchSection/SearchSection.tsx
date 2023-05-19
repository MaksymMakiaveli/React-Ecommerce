import { Input, SearchIcon } from '@shared/UI';

import styles from './SeachSection.module.scss';

export const SearchSection = () => {
  return (
    <div className={styles.searchSection}>
      <Input prefixIcon={<SearchIcon />} />
    </div>
  );
};
