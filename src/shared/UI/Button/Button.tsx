import { useGetClassWithPrefix } from '@shared/UI/_hooks';
import cl from 'classnames';

import type { ButtonHTMLAttributes } from 'react';

import './Button.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'full' | 'sm' | 'md' | 'lg';
};

export const Button = (props: ButtonProps) => {
  const { className, size = 'full', ...restProps } = props;

  const { rootClass, appendClass } = useGetClassWithPrefix('button');

  const classes = cl(rootClass, className, appendClass(`--${size}`));

  return <button className={classes} {...restProps} />;
};
