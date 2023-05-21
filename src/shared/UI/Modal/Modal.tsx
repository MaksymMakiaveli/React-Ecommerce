import { useEffect } from 'react';

import { Portal } from '@shared/UI';
import { useGetClassWithPrefix } from '@shared/UI/_hooks';
import cl from 'classnames';

import type { CSSProperties, ReactNode } from 'react';

import './Modal.scss';

export type ModalProps = {
  children: ReactNode;

  isOpen: boolean;

  onClose: () => void;

  className?: string;

  style?: CSSProperties;

  title?: ReactNode;
};

export const Modal = (props: ModalProps) => {
  const { children, isOpen = false, className, style, onClose, title } = props;

  const { rootClass, appendClass } = useGetClassWithPrefix('modal');

  const classes = cl(rootClass, className);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? onClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <Portal wrapperId="ui-modal-portal">
      <div className={classes} style={style}>
        <div className={appendClass('-content')}>
          <div>
            <span>{title}</span>
          </div>
          {children}
        </div>

        <div className={appendClass('-backdrop')} />
      </div>
    </Portal>
  );
};
