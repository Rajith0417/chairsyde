import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('userMenuButton', { static: false })
  userMenuButton!: ElementRef<HTMLDivElement>;
  @ViewChild('userListBox', { static: false })
  userListBox!: ElementRef<HTMLDivElement>;

  isOpen = false;
  selectedItem: { name: string; time: string } | null = null;
  items = [
    { name: 'Robert Lindley', time: '13:43' },
    { name: 'Jane Smith', time: '13:16' },
    { name: 'Chris Thompson', time: '12:55' },
    { name: 'Aaminah Carlson', time: '12:21' },
    { name: 'Sufyan Caldwell', time: '11:58' },
  ];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => {
        this.userListBox?.nativeElement.focus();
      }, 50);
    }
  }

  closeDropdown() {
    this.isOpen = false;
  }

  selectItem(item: { name: string; time: string }) {
    this.selectedItem = item;
    this.isOpen = false;
    // Ensure focus happens after dropdown closes
    setTimeout(() => {
      this.userMenuButton.nativeElement.focus();
    }, 0);
  }
}
