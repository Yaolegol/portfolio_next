import { FC, ReactNode } from 'react';
import style from './index.module.scss';
import '@/icons/arrow.svg';

interface IProps {
  children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  return <div className={style.layout}>{children}</div>;
};
