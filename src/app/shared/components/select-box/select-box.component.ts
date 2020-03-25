import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  @Input() optionsList: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
