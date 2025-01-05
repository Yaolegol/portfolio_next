import { SliderButton } from '@/modules/Home/components/Projects/Slider/SliderButton';
import { FC, useCallback, useEffect, useState } from 'react';
import { SwiperClass } from 'swiper/react';

interface IProps {
    swiper?: SwiperClass;
}

export const SliderNextButton: FC<IProps> = ({ swiper }) => {
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        swiper?.on('slideChange', (sw) => {
            setIsEnd(sw.isEnd);
        });

        return () => {
            swiper?.off('slideChange');
        };
    }, [swiper]);

    const handleNext = useCallback(() => {
        swiper?.slideNext();
    }, [swiper]);

    return (
        <SliderButton
            disabled={isEnd}
            onClick={handleNext}
            title="Следующий проект"
        />
    );
};
