import { HomePageContext } from '@/modules/Home/context';
import { getMessage } from '@/modules/Lang/helpers';
import { FC, useContext, useMemo } from 'react';

interface IProps {
    id: string;
}

export const IntlMessage: FC<IProps> = ({ id }) => {
    const { langText } = useContext(HomePageContext);

    return useMemo(() => {
        return getMessage(id, langText);
    }, [id, langText]);
};
