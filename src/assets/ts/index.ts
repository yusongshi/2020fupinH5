import '../css/index.scss';

interface Alldata{
    [propName: string]: any
}
declare let alldata:Alldata;

const app = new Vue({
    el: '#app',
    data: {
        jiaodiantu: alldata.jiaodiantu,
        dongtaibaogao: alldata.dongtaibaogao,
        xunzhan: alldata.xunzhan,
        fuhua: alldata.fuhua,
        tuopinji: alldata.tuopinji
    },
    methods:{

    },
    mounted(){
        var swiper1 = new Swiper('#shoupinbg.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 3000,
            loop : true,
        });
        var swiper2 = new Swiper('.swiper-container-box .swiper-container', {
            slidesPerView: 3,
            centeredSlides: true,
            loop : true,
            paginationClickable: true,
            autoplay: 3000,
            spaceBetween: 0
        });
        var swiper3 = new Swiper('#tuopinji.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop : true,
            autoplay: 3000,
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            }
        });
    }
});