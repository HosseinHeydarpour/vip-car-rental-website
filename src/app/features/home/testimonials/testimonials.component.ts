import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChild('swiperEl', {
    static: false,
  })
  slider: ElementRef;
  sliderConfig: SwiperOptions = {
    navigation: false,
    slidesPerView: 3,
    pagination: false,
    spaceBetween: 25,
  };

  ngAfterViewInit(): void {
    if (this.slider) {
      const swiperElement = this.slider.nativeElement;
      Object.assign(swiperElement, this.sliderConfig);
      if (typeof swiperElement.initialize === 'function') {
        swiperElement.initialize();
      } else {
        console.error('Swiper element does not have an initialize method.');
      }
    }
  }
}
