import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() length: string;
  @Input() clearButton: boolean;
  @Output() clearButtonClick = new EventEmitter(); 
  @Output() textboxChange = new EventEmitter()
  textboxValue: string;
  emitChange(newText:string):void {
    this.textboxChange.emit(newText);
  }
  emitClearButtonClick():void{
    this.clearButtonClick.emit(null);
  }
  clearTextbox():void {
    this.textboxValue = ""
  }
  setTextboxValue(_textboxValue:string):void{
    this.textboxValue = _textboxValue;
  }
  handleClearButtonClick():void {
    this.emitClearButtonClick();
    this.initializeTextboxValue();
  }
  handleChange():void{
    this.emitChange(this.textboxValue);
  }
  initializeTextboxValue(){
    this.textboxValue = ""
  }
  constructor() {
    this.clearButton = false,
    this.initializeTextboxValue();
   }

  ngOnInit(): void {
  }

}
