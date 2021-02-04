import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.headerService.getHeaderData().title;
  }
  getIcon(): string {
    return this.headerService.getHeaderData().icon;
  }
  getUrl(): string {
    return this.headerService.getHeaderData().route;
  }
}
