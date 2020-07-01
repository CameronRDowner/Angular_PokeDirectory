import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() length: string;
  @Input() clearButton: boolean; 
  @Output() textboxChange = new EventEmitter()
  textboxValue: string;
  emitChange(newText:string):void {
    this.textboxChange.emit(newText)
  }
  handleChange():void{
    this.emitChange(this.textboxValue);
  }
  initializeTextboxValue(){
    console.log("ran")
    this.textboxValue = ""
  }
  constructor() {
    this.clearButton = false,
    this.initializeTextboxValue();
   }

  ngOnInit(): void {
  }

}
