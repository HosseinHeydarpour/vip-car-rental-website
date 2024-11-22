import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { featherPhoneCall, featherChevronDown } from '@ng-icons/feather-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HeroComponent } from './features/home/hero/hero.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { InfoBoxComponent } from './features/hero/info-box/info-box.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeroComponent, NavbarComponent, InfoBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgIconsModule.withIcons({ featherPhoneCall, featherChevronDown }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
