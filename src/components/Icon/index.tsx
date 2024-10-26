import { stylesConcat } from '@/helpers/styles';
import { sprite } from '@public/sprite-manifest.json';
import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
  className?: string;
  name: string;
}

export const Icon: FC<IProps> = ({ className, name }) => {
  return (
    <svg className={stylesConcat(style.main, className)}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};
