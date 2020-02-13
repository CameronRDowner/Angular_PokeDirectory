import { Component, OnInit } from '@angular/core';
import { TextButton } from 'src/app/shared/models/text-button/text-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.component.html',
  styleUrls: ['./search-controls.component.scss']
})
export class SearchControlsComponent implements OnInit {
  searchButton: TextButton;
  searchTerm:string;

  openBrowsePage(){
    this.router.navigate(['browse'])
  }
  constructor(private router: Router) {
   }

  ngOnInit(): void {
    this.searchButton = new TextButton('Search');
    this.searchTerm = "";
  }

}
