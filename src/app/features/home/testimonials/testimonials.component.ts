import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { TestimonialContent } from '../../../shared/testimonials-card/testimonial.model';

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

    injectStyles: [
      `
      ::slotted(swiper-slide) {
        height: 100%;
      }

      swiper-container{
      height: 100%;
      }
      `,
    ],
  };

  testimonials: TestimonialContent[] = [
    {
      name: 'Ali',
      comment:
        'The VIP car rental service was exceptional! The cars were in pristine condition, and the process was seamless from start to finish.',
      rating: 5,
      role: 'Customer',
      profileImg: 'images/testimonials/3.webp',
    },
    {
      name: 'Sophia',
      comment:
        'Truly a first-class experience. The staff was professional and courteous, and the vehicle exceeded my expectations. Will definitely rent from here again!',
      rating: 5,
      role: 'Frequent Traveler',
      profileImg: 'images/testimonials/2.webp',
    },
    {
      name: 'Michael',
      comment:
        'Great service with a wide range of luxury vehicles to choose from. The pickup and drop-off were incredibly smooth. It’s worth every penny!',
      rating: 4,
      role: 'Businessman',
      profileImg: 'images/testimonials/1.webp',
    },
    {
      name: 'Emily',
      comment:
        'The customer service was outstanding! The team went above and beyond to ensure my needs were met. I felt like a true VIP!',
      rating: 5,
      role: 'Vacationer',
      profileImg: 'images/testimonials/6.webp',
    },
    {
      name: 'Elena',
      comment:
        'I’ve rented from several places, but this was by far the best experience. The car was immaculate, and the attention to detail was remarkable.',
      rating: 5,
      role: 'Car Enthusiast',
      profileImg: 'images/testimonials/4.webp',
    },
  ];

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
