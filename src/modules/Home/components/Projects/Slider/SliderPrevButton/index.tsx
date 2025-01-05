import { SliderButton } from '@/modules/Home/components/Projects/Slider/SliderButton';
import { FC, useCallback, useEffect, useState } from 'react';
import { SwiperClass } from 'swiper/react';

interface IProps {
    swiper?: SwiperClass;
}

export const SliderPrevButton: FC<IProps> = ({ swiper }) => {
    const [isBeginning, setIsBeginning] = useState(true);

    useEffect(() => {
        swiper?.on('slideChange', (sw) => {
            setIsBeginning(sw.isBeginning);
        });

        return () => {
            swiper?.off('slideChange');
        };
    }, [swiper]);

    const handleNext = useCallback(() => {
        swiper?.slidePrev();
    }, [swiper]);

    return (
        <SliderButton
            disabled={isBeginning}
            isPrev
            onClick={handleNext}
            title="Предыдущий проект"
        />
    );
};
