import { Component, OnInit, Output } from '@angular/core';
import { TextButton } from 'src/app/shared/models/text-button/text-button';
import { Router } from '@angular/router';
import { BrowseService } from '../../browse.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.component.html',
  styleUrls: ['./search-controls.component.scss']
})
export class SearchControlsComponent implements OnInit {
  @Output() searchButtonClick = new EventEmitter();
  searchButton: TextButton;
  searchTerm: string;
  handleSearchButtonClick(){
    this.updateServiceSearchTerm();
    this.searchButtonClick.emit(null);
  }
  private updateServiceSearchTerm(){
    this.browseService.searchTerm = this.searchTerm; 
  }
  constructor(public browseService:BrowseService) {
    this.searchButton = new TextButton('Search');
    this.searchTerm = "";
  }

  ngOnInit(): void {
  }

}
