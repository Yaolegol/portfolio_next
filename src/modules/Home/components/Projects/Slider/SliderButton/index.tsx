import { Icon } from '@/components/Icon';
import { styles } from '@/helpers/styles';
import { FC } from 'react';
import style from './index.module.scss';

interface IProps {
    disabled?: boolean;
    isPrev?: boolean;
    onClick: () => void;
    title: string;
}

export const SliderButton: FC<IProps> = ({
    disabled,
    isPrev,
    onClick,
    title,
}) => {
    return (
        <button
            className={styles(
                style.index,
                isPrev ? style.prev : '',
                disabled ? style.disabled : '',
            )}
            onClick={onClick}
            type="button"
        >
            <span>{title}</span>
            <Icon className={style.icon} name="arrow-right" />
        </button>
    );
};
