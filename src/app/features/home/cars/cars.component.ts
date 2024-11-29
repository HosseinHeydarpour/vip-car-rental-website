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
    navigation: true,
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

       .swiper:hover .swiper-button-next, .swiper:hover .swiper-button-prev {
        opacity: 1;
        visibility: visible;
       }



      .swiper-pagination-bullet-active {
        border: 1px solid transparent;
        background: #f5b754;
      }

      .swiper-button-next,.swiper-button-prev{
        background-color: var(--color-yellow);
            background-color: var(--color-yellow);
    width: 55px;
    height: 55px;
    color: #222 !important;
    border-radius: 50%;
    font-size: 12px;
    opacity: 0;
    visibility: hidden;
    transition: all .4s;
      }

      .swiper-button-next svg, .swiper-button-prev svg{
          width: 5px;
      }

    
      `,
    ],
  };

  cars = [
    {
      carName: 'Rolls Royce Cullinan',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '4 Bags',
      imagePath: 'images/cars/12.webp',
      price: '$900',
    },
    {
      carName: 'Bentley Continental',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/13.webp',
      price: '$500',
    },
    {
      carName: 'Audi RS7 Sportback',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/14.webp',
      price: '$450',
    },
    {
      carName: 'AUDI Q8',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '3 Bags',
      imagePath: 'images/cars/15.webp',
      price: '$450',
    },
    {
      carName: 'Lamborghini Urus',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/1.webp',
      price: '$750',
    },
    {
      carName: 'Aston Martin DBX',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/8.webp',
      price: '$500',
    },
    {
      carName: 'Bugatti Mistral W16',
      carAge: 'Age 25',
      carSeats: 2,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/9.webp',
      price: '$800',
    },
    {
      carName: 'Bentley Bentayga',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/11.webp',
      price: '$600',
    },
    {
      carName: 'Rolls Royce Cullinan',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '4 Bags',
      imagePath: 'images/cars/12.webp',
      price: '$900',
    },
    {
      carName: 'Bentley Continental',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/13.webp',
      price: '$500',
    },
    {
      carName: 'Audi RS7 Sportback',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/14.webp',
      price: '$450',
    },
    {
      carName: 'AUDI Q8',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '3 Bags',
      imagePath: 'images/cars/15.webp',
      price: '$450',
    },
    {
      carName: 'Lamborghini Urus',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/7.webp',
      price: '$750',
    },
    {
      carName: 'Aston Martin DBX',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/8.webp',
      price: '$500',
    },
    {
      carName: 'Bugatti Mistral W16',
      carAge: 'Age 25',
      carSeats: 2,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/9.webp',
      price: '$800',
    },
    {
      carName: 'Bentley Bentayga',
      carAge: 'Age 25',
      carSeats: 4,
      carTransmittion: 'Auto',
      carStorage: '2 Bags',
      imagePath: 'images/cars/11.webp',
      price: '$600',
    },
  ];

  activeSlide: number;

  ngAfterViewInit(): void {
    const swiperElement = this.swiperEl.nativeElement;
    if (this.swiperEl) {
      Object.assign(swiperElement, this.sliderConfig);
      // Ensure swiperElement has the initialize method
      if (typeof swiperElement.initialize === 'function') {
        swiperElement.initialize();
      } else {
        console.error('Swiper element does not have an initialize method.');
      }
    }

    swiperElement.addEventListener('swiperslidechange', (event) => {
      this.activeSlide = event.detail[0].realIndex;
    });
  }
}
