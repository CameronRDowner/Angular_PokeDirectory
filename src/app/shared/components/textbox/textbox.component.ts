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
  textboxValue: string;
  emitClearButtonClick():void{
    console.log('clear ran')
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
