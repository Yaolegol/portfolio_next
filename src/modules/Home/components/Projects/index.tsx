import { Slider } from '@/modules/Home/components/Projects/Slider';
import { SliderNextButton } from '@/modules/Home/components/Projects/Slider/SliderNextButton';
import { SliderPrevButton } from '@/modules/Home/components/Projects/Slider/SliderPrevButton';
import { FC, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import style from './index.module.scss';

export const Projects: FC = () => {
    const [swiper, setSwiper] = useState<SwiperClass>();

    return (
        <div>
            <div className={style.arrows}>
                <SliderPrevButton swiper={swiper} />
                <SliderNextButton swiper={swiper} />
            </div>
            <Slider onSwiper={setSwiper} />
        </div>
    );
};
