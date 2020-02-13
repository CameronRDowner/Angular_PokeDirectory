import { Component, OnInit } from '@angular/core';
import { TextButton } from 'src/app/shared/models/text-button/text-button';
import { BrowseService } from '../../browse.service';

@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.component.html',
  styleUrls: ['./search-controls.component.scss']
})
export class SearchControlsComponent implements OnInit {
  searchButton: TextButton;


  constructor(private browseService:BrowseService) {
   }

  ngOnInit(): void {
    this.searchButton = new TextButton('Search');
  }

}
