'use client';

import { Frutostore } from '@/modules/Home/components/Projects/Project/Frutostore';
import { FC } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './index.module.scss';

interface IProps {
    onSwiper: (swiper: SwiperClass) => void;
}

export const Slider: FC<IProps> = ({ onSwiper }) => {
    return (
        <div className={style.index}>
            <Swiper onSwiper={onSwiper}>
                <SwiperSlide className={style.slide}>
                    <div className={style.card}>
                        <Frutostore />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.card}>test</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
