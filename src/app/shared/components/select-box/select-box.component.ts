import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  optionsVisible: boolean;
  selectedOption: string;
  @Input() optionsList: string[];
  @Output() optionClick = new EventEmitter();
  toggleOptionsVisibility():void{
    this.optionsVisible = !this.optionsVisible;
  }
  emitSelectBoxChange (optionClicked): void {
    this.optionClick.emit(optionClicked);
  }
  handleOptionClick(optionClicked:string):void{
    this.setSelectedOption(optionClicked);
    this.emitSelectBoxChange(optionClicked);
  }
  setSelectedOption(option:string):void{
    this.selectedOption = option;
  }
  initializeSelectedOption():void{
    this.selectedOption = this.optionsList[0];
  }
  constructor() {
    this.optionsVisible = false;
   }
  ngOnInit(): void {
    this.initializeSelectedOption();
  }

}
