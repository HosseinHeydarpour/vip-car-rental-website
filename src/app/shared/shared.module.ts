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
} from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';
import { PrimaryBtnComponent } from './primary-btn/primary-btn.component';
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
    }),
  ],
  exports: [CommonModule, NgIconsModule, PrimaryBtnComponent],
  declarations: [PrimaryBtnComponent, PrimaryBtnComponent],
})
export class SharedModule {}
