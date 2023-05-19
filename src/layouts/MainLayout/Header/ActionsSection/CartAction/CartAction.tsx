import { CustomNavLink } from '@components';
import { routes } from '@core/routes';
import { CartIcon } from '@shared/UI';
import cl from 'classnames';

import type { CustomNavLinkProps } from '@components';

import styles from './CartAction.module.scss';

export const CartAction = () => {
  const classes: CustomNavLinkProps['className'] = ({ isActive }) => {
    return cl(styles.cartAction, {
      [styles.cartActionActive]: isActive,
    });
  };

  return (
    <CustomNavLink to={routes.cart.root} className={classes}>
      <CartIcon />
    </CustomNavLink>
  );
};
