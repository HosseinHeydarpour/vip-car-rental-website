import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent implements AfterViewInit {
  @ViewChild('servicesSwiper', {
    static: false,
  })
  servicesSlider;

  config: SwiperOptions = {
    navigation: false,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    slidesPerGroup: 1,
    pagination: {
      clickable: true,
    },
    injectStyles: [
      `
      .swiper{
        padding-bottom: 40px;
      }


      .swiper-pagination{
      position: absolute;
      bottom: 0vh !important;
      }

          .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        text-align: center;
        
       
        color: #000;
        opacity: 1;
        background: transparent;
        border: 1px solid white;

      }

      .swiper-pagination-bullet-active {
        border: 1px solid transparent;
        background: #f5b754;
      }
      `,
    ],

    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
    },
  };

  ngAfterViewInit(): void {
    if (this.servicesSlider) {
      const swiperElement = this.servicesSlider.nativeElement;
      Object.assign(swiperElement, this.config);
      // Ensure swiperElement has the initialize method
      if (typeof swiperElement.initialize === 'function') {
        swiperElement.initialize();
      } else {
        console.error('Swiper element does not have an initialize method.');
      }
    }
  }
}