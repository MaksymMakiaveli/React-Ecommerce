import { forwardRef } from 'react';

import { useGetClassWithPrefix } from '@shared/UI/_hooks';
import cl from 'classnames';

import type { HTMLAttributes, ReactElement } from 'react';

import './Input.scss';

export type InputProps = HTMLAttributes<HTMLInputElement> & {
  prefixIcon?: ReactElement;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { prefixIcon, className, ...restProps } = props;

  const { rootClass, appendClass } = useGetClassWithPrefix('input');

  const classes = cl(rootClass, className, {
    [appendClass('--with-prefix')]: prefixIcon,
  });

  const simpleElement = <input className={classes} ref={ref} {...restProps} />;

  const prefixElement = prefixIcon ? (
    <span className={appendClass('-prefix')}>{prefixIcon}</span>
  ) : null;

  const withPrefix = (
    <div className={appendClass(['-wrapper', '-wrapper--with-prefix'])}>
      {prefixElement}
      {simpleElement}
    </div>
  );

  const element = prefixIcon ? withPrefix : simpleElement;

  return <>{element}</>;
});
