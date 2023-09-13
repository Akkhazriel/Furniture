import Swiper from "swiper";
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Mousewheel, Keyboard],

    direction: 'horizontal',
    spaceBetween: 36,
    slidesPerView: 4,
    slidesPerGroup: 4,

    mousewheel: {
        invert: false,
        releaseOnEdges: true,
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