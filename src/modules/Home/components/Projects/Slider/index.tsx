'use client';

import { Frutostore } from '@/modules/Home/components/Projects/Project/Frutostore';
import { SliderNextButton } from '@/modules/Home/components/Projects/Slider/SliderNextButton';
import { SliderPrevButton } from '@/modules/Home/components/Projects/Slider/SliderPrevButton';
import { FC, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './index.module.scss';

export const Slider: FC = () => {
    const [swiper, setSwiper] = useState<SwiperClass>();

    return (
        <div className={style.index}>
            <Swiper onSwiper={setSwiper}>
                <SwiperSlide>
                    <div className={style.card}>
                        <Frutostore />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.card}>test</div>
                </SwiperSlide>
            </Swiper>
            {/*<SliderPrevButton swiper={swiper} />*/}
            {/*<SliderNextButton swiper={swiper} />*/}
        </div>
    );
};
