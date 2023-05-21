import { Button, CartPlusIcon } from '@shared/UI';

import styles from './BuyButton.module.scss';

export type BuyButtonProps = {
  onClickBuy?: () => void;
};

export const BuyButton = (props: BuyButtonProps) => {
  const { onClickBuy } = props;

  return (
    <Button
      className={styles.buyButton}
      icon={<CartPlusIcon />}
      shape="circle"
      btnType="secondary"
      onClick={onClickBuy}
    ></Button>
  );
};
