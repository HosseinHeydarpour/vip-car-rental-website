import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InfoBoxComponent } from './hero/info-box/info-box.component';
import { HeroComponent } from './home/hero/hero.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HomeComponent, HeroComponent, InfoBoxComponent],
  imports: [SharedModule, CoreModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule {}
