import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-navbar.html',
  styleUrl: './side-navbar.css',
})
export class SideNavbar {
menuItems = [
    { title: 'Home', icon: 'ri-home-5-line', route: '/home' },
    { title: 'Explore', icon: 'ri-compass-3-line', route: '/explore' },
    { title: 'Profile', icon: 'ri-user-line', route: '/profile' },
  ];
}
