import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent {
  @Input() href: string = '/';
  @Input() iconName: string = '';
  @Input() title: string = '';
  @Input() subItems: { href: string; title: string }[] = [];

  isSubMenuOpen: boolean = false;

  constructor(public router: Router) {}

  toggleSubMenu(event: MouseEvent): void {
    if (this.subItems.length) {
      event.preventDefault();
      this.isSubMenuOpen = !this.isSubMenuOpen;
    }
  }

  isActive(): boolean {
    // Check if the current route matches the href or if it's a sub-route
    return this.router.url === this.href || this.router.url.startsWith(this.href);
  }
}
