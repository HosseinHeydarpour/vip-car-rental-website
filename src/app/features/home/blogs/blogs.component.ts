import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Blog } from '../../../shared/blog-card/blog.model';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements AfterViewInit {
  @ViewChild('swiperEl', {
    static: false,
  })
  blogSlider: ElementRef;

  blogs: Blog[] = [
    {
      title: 'How to Rent a Car at the Airport Terminal?',
      date: { day: '23', month: 'Apr' },
      category: 'Airport',
      blogImage: 'images/blog/3.webp',
    },
    {
      title: 'Penalties for violating the rules in rental cars',
      date: { day: '22', month: 'Apr' },
      category: 'Rules',
      blogImage: 'images/blog/4.webp',
    },
    {
      title: 'How to check a car before renting?',
      date: { day: '20', month: 'Apr' },
      category: 'Rental Car',
      blogImage: 'images/blog/5.webp',
    },
    {
      title: 'Documents required for car rental',
      date: { day: '29', month: 'Apr' },
      category: 'Rental',
      blogImage: 'images/blog/6.webp',
    },
    {
      title: 'Rental cost of sport and other cars',
      date: { day: '27', month: 'Apr' },
      category: 'Sport Cars',
      blogImage: 'images/blog/7.webp',
    },
    {
      title: 'Rental cars how to check driving fines?',
      date: { day: '25', month: 'Apr' },
      category: 'Fines',
      blogImage: 'images/blog/8.webp',
    },
  ];

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
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
    },
  };

  ngAfterViewInit(): void {
    if (this.blogSlider) {
      const swiperElement = this.blogSlider.nativeElement;
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
