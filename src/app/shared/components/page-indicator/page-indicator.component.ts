import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-indicator',
  templateUrl: './page-indicator.component.html',
  styleUrls: ['./page-indicator.component.scss']
})
export class PageIndicatorComponent implements OnInit {
  @Input() totalPages: number;
  @Input() currentPage:number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
