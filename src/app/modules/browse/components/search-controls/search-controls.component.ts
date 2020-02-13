import { Component, OnInit } from '@angular/core';
import { TextButton } from 'src/app/shared/models/text-button/text-button';

@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.component.html',
  styleUrls: ['./search-controls.component.scss']
})
export class SearchControlsComponent implements OnInit {
  searchButton: TextButton;
  searchTerm:string;
  constructor() {
   }

  ngOnInit(): void {
    this.searchButton = new TextButton('Search');
    this.searchTerm = "";
  }

}
