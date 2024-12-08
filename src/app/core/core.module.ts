import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, MobileNavbarComponent],
  imports: [SharedModule],
  exports: [NavbarComponent, FooterComponent, MobileNavbarComponent],
})
export class CoreModule {}
