import { NgModule } from '@angular/core';
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
} from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';
import { PrimaryBtnComponent } from './primary-btn/primary-btn.component';
import { SecondaryBtnComponent } from './secondary-btn/secondary-btn.component';
import { CardComponent } from './card/card.component';
import { YellowSeperatorComponent } from './yellow-seperator/yellow-seperator.component';
import { CtaComponent } from './cta/cta.component';
import { CarCardComponent } from './car-card/car-card.component';

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
  ],
})
export class SharedModule {}
