import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from '../nav-item/nav-item.component';


@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [NavItemComponent, CommonModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css'],
})
export class AdminSidebarComponent {
  navItems = [
    {
      href: '/dashboard',
      iconName: 'assets/icons/category.svg',
      title: 'Dashboard',
      subItems: []
    },
    {
      href: '/company-management',
      iconName: 'assets/icons/category.svg',
      title: 'Company Management',
      subItems: [
        { href: '/manage-companies', title: 'Manage Companies' },
        { href: '/manage-branches', title: 'Manage Branches' }
      ]
    },
    {
      href: '/reports',
      iconName: 'assets/icons/category.svg',
      title: 'Reports',
      subItems: []
    },
    {
      href: '/courses-management',
      iconName: 'assets/icons/category.svg',
      title: 'Courses Management',
      subItems: []
    }
  ];
}
