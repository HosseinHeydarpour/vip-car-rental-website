import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isSticky = offset > 50; // Toggle sticky when user scrolls down 50px
  }

  navbarMenus = [
    {
      title: 'Home',
    },
    {
      title: 'Services',
      submenus: [
        {
          title: 'Service 01',
        },
        {
          title: 'Service 02',
        },
        {
          title: 'Service 03',
        },
      ],
    },
    {
      title: 'Blogs',
    },
    {
      title: 'About Us',
    },
    {
      title: 'Contact Us',
    },
  ];
}
