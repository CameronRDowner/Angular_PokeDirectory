import { Component, OnInit, Input, Output, ElementRef, HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
  animations: [
    trigger('fadeInY', [
      transition('void => *', [ 
      style({ 
          opacity: 0,
          transform: 'translateY(-50px)'
        }),
        animate('0.2s ease-out', 
        style({ 
          opacity: 1,
          transform: 'translateY(0)' 
        }))
      ]),
      transition('* => void', [
        animate('0.2s ease-in', 
        style({ 
          opacity: 0,
          transform: 'translateY(-50px)' 
        }))
      ])
    ])
  ]
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
    this.toggleOptionsVisibility();
  }
  setSelectedOption(option:string):void{
    this.selectedOption = option;
  }
  initializeSelectedOption():void{
    this.selectedOption = this.optionsList[0];
  }
  handleClickOutside():void{
    if(this.optionsVisible){
      this.toggleOptionsVisibility();
    }
  }
  constructor(private elementRef:ElementRef ) {
    this.optionsVisible = false;
   }
  ngOnInit(): void {
    this.initializeSelectedOption();
  }

}
