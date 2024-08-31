import { FC } from 'react';
import style from './index.module.scss';

export const Photo: FC = () => {
  return (
    <div className={style.index}>
      <img
        alt="Oleg Oleinik"
        className={style.image}
        loading="lazy"
        src="/images/avatar.webp"
      />
    </div>
  );
};