import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { gameCarDoor } from '@ng-icons/game-icons';
import { featherPhoneCall, featherChevronDown } from '@ng-icons/feather-icons';
import {
  bootstrapPersonFill,
  bootstrapLuggageFill,
  bootstrapCarFrontFill,
} from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';
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
    }),
  ],
  exports: [CommonModule, NgIconsModule],
})
export class SharedModule {}
