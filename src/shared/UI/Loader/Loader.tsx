import cl from 'classnames';

import { useGetClassWithPrefix } from '../_hooks';

import './Loader.scss';

export type LoaderProps = {
  size?: 'sm' | 'md' | 'lg';

  className?: string;
};

export const Loader = (props: LoaderProps) => {
  const { size = 'md', className } = props;

  const { rootClass, appendClass } = useGetClassWithPrefix('loader');

  const classes = cl(rootClass, className, appendClass(`--${size}`));

  return (
    <>
      <div className={classes} data-child="1"></div>
      <div className={classes} data-child="2"></div>
      <div className={classes} data-child="3"></div>
    </>
  );
};
