import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { TextButton } from '../../models/text-button/text-button';
import { EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss'],
  animations: [
    trigger('fade', [
    transition('void => *', [
      style({ opacity: 0 }),
      animate('0.2s ease-out', style({ opacity: 1 }))
    ]),
    transition('* => void', [
      animate('0.2s ease-in', style({ opacity: 0 }))
    ])
  ])]
})
export class PickerComponent implements OnInit {
  toggledOption:string;
  modalVisible:boolean;
  pickerButton:TextButton;
  @Input() optionsList:Array<string>;
  @Output() optionClick = new EventEmitter();
  handleOptionClick(optionName:string):void{
    this.setToggledOption(optionName);
    this.toggleModal();
    this.emitOptionClick(optionName);
  }
  setToggledOption(optionName:string){
    this.toggledOption = optionName;
  }
  toggleModal():void{
    this.modalVisible = !this.modalVisible;
  }
  emitOptionClick(optionName:string):void{
    this.optionClick.emit(optionName);
  }
  handleClickOutside():void{
    if(this.modalVisible){
      this.toggleModal();
    }
  }
  initializeToggledOption():void{
    this.toggledOption = this.optionsList[0];
  }
  initializeModalVisibility():void{
    this.modalVisible = false;
  }
  constructor() {
    
   }
  ngOnChanges():void{
    this.initializeToggledOption();
  }

  ngOnInit(): void {
    this.initializeModalVisibility();
  }

}
