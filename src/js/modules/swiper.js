import Swiper from "swiper";
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [Navigation,  Keyboard],

    direction: 'horizontal',
    spaceBetween: 36,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 400,

    breakpoints: {
        599: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        999: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },

    autoHeight: true,
    roundLengths: true,

    keyboard: {
        enabled: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

export default swiper;