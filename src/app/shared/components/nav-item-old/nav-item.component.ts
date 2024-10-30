import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent {
  @Input() href: string = '/';
  @Input() iconName: string = '';
  @Input() title: string = '';
  @Input() subItems: { href: string; title: string }[] = [];
  
  isSubMenuOpen: boolean = false;

  toggleSubMenu(event: MouseEvent) {
    if (this.subItems.length) {
      event.preventDefault();
      this.isSubMenuOpen = !this.isSubMenuOpen;
    }
  }

  
}
