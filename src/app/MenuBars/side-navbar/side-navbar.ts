import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
  badge?: number | string;
  exact?: boolean;
}

@Component({
  selector: 'app-side-navbar',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './side-navbar.html',
  styleUrl: './side-navbar.css',
})
export class SideNavbar {
  isLibraryExpanded = false;

  toggleLibrary() {
    this.isLibraryExpanded = !this.isLibraryExpanded;
  }

  libraryItems = [
    { label: 'Sessions', route: '/sessions' },
    { label: 'Bookmarks', route: '/bookmarks' },
    { label: 'Sheets/Roadmaps', route: '/sheets' },
    { label: 'My-Communities', route: '/communities' }
  ];

  menuItems: MenuItem[] = [
    {
      icon: 'ri-home-5-line',
      label: 'Home',
      route: '/home',
      exact: true
    },
    {
      icon: 'ri-compass-3-line',
      label: 'Explore',
      route: '/explore'
    },
    {
      icon: 'ri-message-3-line',
      label: 'Messages',
      route: '/messages'
    },
    {
      icon: 'ri-team-line',
      label: 'Network',
      route: '/networks'
    },
    {
      icon: 'ri-notification-3-line',
      label: 'Notifications',
      route: '/notifications',
      badge: 3
    },
    {
      icon: 'ri-bar-chart-box-line',
      label: 'Dashboard',
      route: '/dashboard'
    },

    {
      icon: 'ri-user-line',
      label: 'Profile',
      route: '/profile'
    }
  ];


}
