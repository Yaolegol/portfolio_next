import { FC } from 'react';
import style from './index.module.scss';

export const Description: FC = () => {
    return (
        <div className={style.index}>
            На этом сайте Вы можете посмотреть мои проекты, а также основную
            информацию обо мне как о frontend разработчике
        </div>
    );
};
