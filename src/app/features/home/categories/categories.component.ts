import { AfterViewInit, Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements AfterViewInit {
  sliderConfig: SwiperOptions = {};
  ngAfterViewInit(): void {}
}
