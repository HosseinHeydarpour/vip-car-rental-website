import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { gameCarDoor } from '@ng-icons/game-icons';
import { featherPhoneCall, featherChevronDown } from '@ng-icons/feather-icons';

import {
  bootstrapPersonFill,
  bootstrapLuggageFill,
  bootstrapCarFrontFill,
  bootstrapArrowUpRight,
  bootstrapCheck2,
  bootstrapPlay,
  bootstrapWhatsapp,
  bootstrapInfoLg,
  bootstrapStarFill,
  bootstrapQuote,
  bootstrapTelephoneOutbound,
  bootstrapEnvelopeAt,
  bootstrapMap,
  bootstrapFacebook,
  bootstrapYoutube,
} from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';
import { PrimaryBtnComponent } from './primary-btn/primary-btn.component';
import { SecondaryBtnComponent } from './secondary-btn/secondary-btn.component';
import { CardComponent } from './card/card.component';
import { YellowSeperatorComponent } from './yellow-seperator/yellow-seperator.component';
import { CtaComponent } from './cta/cta.component';
import { CarCardComponent } from './car-card/car-card.component';
import { TestimonialsCardComponent } from './testimonials-card/testimonials-card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BrandSliderComponent } from './brand-slider/brand-slider.component';

@NgModule({
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      gameCarDoor,
      featherPhoneCall,
      featherChevronDown,
      bootstrapPersonFill,
      bootstrapLuggageFill,
      bootstrapCarFrontFill,
      bootstrapArrowUpRight,
      bootstrapCheck2,
      bootstrapPlay,
      bootstrapWhatsapp,
      bootstrapInfoLg,
      bootstrapStarFill,
      bootstrapQuote,
      bootstrapTelephoneOutbound,
      bootstrapEnvelopeAt,
      bootstrapMap,
      bootstrapFacebook,
      bootstrapYoutube,
    }),
  ],
  declarations: [
    PrimaryBtnComponent,
    SecondaryBtnComponent,
    SecondaryBtnComponent,
    CardComponent,
    YellowSeperatorComponent,
    CtaComponent,
    CarCardComponent,
    TestimonialsCardComponent,
    BlogCardComponent,
    BrandSliderComponent,
  ],
  exports: [
    CommonModule,
    NgIconsModule,
    PrimaryBtnComponent,
    SecondaryBtnComponent,
    CardComponent,
    YellowSeperatorComponent,
    CtaComponent,
    CarCardComponent,
    TestimonialsCardComponent,
    BlogCardComponent,
    BrandSliderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
