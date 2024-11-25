import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InfoBoxComponent } from './home/hero/info-box/info-box.component';
import { HeroComponent } from './home/hero/hero.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { OurServicesComponent } from './home/our-services/our-services.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    InfoBoxComponent,
    AboutUsComponent,
    OurServicesComponent,
  ],
  imports: [SharedModule, CoreModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule {}
