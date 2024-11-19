import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [AppComponent, HomeComponent, HeroComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ featherPhoneCall, featherChevronDown }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
