import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  @Input() optionsList: string[];
  @Output() optionClick = new EventEmitter();
  handleSelectBoxChange (optionClicked): void {
    this.optionClick.emit(optionClicked);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
