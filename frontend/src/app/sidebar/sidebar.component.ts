import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const links = [
      { name: 'Dashboard', icon: 'dashboard', route: '' },
      { name: 'Weather', icon: 'weather', route: 'weather' },
      { name: 'Crops', icon: 'crops', route: 'crops' },
      { name: 'Products', icon: 'products', route: 'produts' },
    ];
  }
}
