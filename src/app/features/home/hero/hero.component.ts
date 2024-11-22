import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('swiperEl', { static: false }) swiperEl?: ElementRef;
  config: SwiperOptions = {
    navigation: false,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    injectStyles: [
      `
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
  ngAfterViewInit() {
    if (this.swiperEl) {
      const swiperElement = this.swiperEl.nativeElement;
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
