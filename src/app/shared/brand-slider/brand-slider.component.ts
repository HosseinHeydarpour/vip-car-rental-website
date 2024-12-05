import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-brand-slider',
  templateUrl: './brand-slider.component.html',
  styleUrl: './brand-slider.component.scss',
})
export class BrandSliderComponent implements AfterViewInit {
  @ViewChild('swiperEl', {
    static: false,
  })
  logoSlider;
  config: SwiperOptions = {
    navigation: false,
    slidesPerView: 6,
    spaceBetween: 15,
    loop: true,
    slidesPerGroup: 1,
    pagination: false,
    autoplay: {
      delay: 2500,
    },

    injectStyles: [
      `
      img {
        width: 100%;
      }
      
      `,
    ],

    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  };

  ngAfterViewInit(): void {
    if (this.logoSlider) {
      const swiperElement = this.logoSlider.nativeElement;
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
