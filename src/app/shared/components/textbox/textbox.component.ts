import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() clearButton: boolean;
  @Input() initialValue: string;
  @Input() width: string;
  @Output() clearButtonClick = new EventEmitter();
  textboxValue: string;
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
    this.setTextboxValue("");
  }
  initializeValue(){
    if(this.initialValue === undefined){
      this.textboxValue = ""
    }
    else{
      this.textboxValue = this.initialValue
    }
  }
  constructor() {
    this.clearButton = false
   }

  ngOnInit(): void {
    this.initializeValue();
  }

}
