import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
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
