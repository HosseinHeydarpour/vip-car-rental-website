import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent implements AfterViewInit {
  @ViewChild('swiperEl', {
    static: false,
  })
  swiperEl?: ElementRef;

  sliderConfig: SwiperOptions = {
    navigation: {
      nextEl: '.custom-next', // Custom "Next" button
      prevEl: '.custom-prev', // Custom "Previous" button
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: false,
    pagination: false,
    initialSlide: 1,

    injectStyles: [
      `
      .swiper{
        overflow: visible;
            max-width: 800px;
            margin: 0 auto;
      }

      .swiper-pagination{
      position: absolute;
      bottom: 4vh !important;
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
  };

  ngAfterViewInit(): void {
    if (this.swiperEl) {
      const swiperElement = this.swiperEl.nativeElement;
      Object.assign(swiperElement, this.sliderConfig);
      // Ensure swiperElement has the initialize method
      if (typeof swiperElement.initialize === 'function') {
        swiperElement.initialize();
      } else {
        console.error('Swiper element does not have an initialize method.');
      }
    }
  }
}
